import { collection, getDocs, doc, setDoc, deleteDoc, getDoc } from 'firebase/firestore';
import { db, auth } from '../config/firebase'; // Added auth impoort
import { v4 as uuidv4 } from 'uuid'; // Need uuid for logs

export const collections = {
    BLOGS: 'blogs',
    GAMES: 'games',
    TEAM_MEMBERS: 'team-members',
    ABOUT_TIMELINE: 'about-timeline',
    ABOUT_VALUES: 'about-values',
    WHY_CHOOSE_US: 'why-choose-us',
    AUDIT_LOGS: 'audit_logs' // Added audit logs collection
};

export const fetchCollectionData = async (collectionName: string) => {
    const querySnapshot = await getDocs(collection(db, collectionName));
    const data: any[] = [];
    querySnapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
    });
    return data;
};

export const fetchDocument = async (collectionName: string, id: string) => {
    const docRef = doc(db, collectionName, id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        return null;
    }
};

const createAuditLog = async (action: "CREATE" | "UPDATE" | "DELETE", collectionName: string, documentId: string, changes?: any) => {
    const adminId = auth.currentUser?.uid || "unknown"; // Fallback to unknown if no user
    const logId = uuidv4();
    const logData = {
        id: logId,
        timestamp: new Date().toISOString(),
        adminId,
        action,
        collectionName,
        documentId,
        ...(changes && { changes })
    };

    await setDoc(doc(db, collections.AUDIT_LOGS, logId), logData);
}

export const saveDocument = async (collectionName: string, id: string, data: any) => {
    // Check if document exists to determine CREATE vs UPDATE
    const existingDoc = await fetchDocument(collectionName, id);
    const action = existingDoc ? "UPDATE" : "CREATE";

    const docRef = doc(db, collectionName, id);
    await setDoc(docRef, data);

    // Create Audit Log asynchronously
    createAuditLog(action, collectionName, id, action === "UPDATE" ? { updated_fields: Object.keys(data) } : null).catch(e => console.error("Audit log error:", e));
};

export const deleteDocument = async (collectionName: string, id: string) => {
    const docRef = doc(db, collectionName, id);
    await deleteDoc(docRef);

    // Create Audit Log asynchronously
    createAuditLog("DELETE", collectionName, id).catch(e => console.error("Audit log error:", e));
};
