import { db } from "../config/firebase";
import { doc, setDoc, getDocs, collection, deleteDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Helper to get __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to read JSON
const readJSON = (relPath: string) => {
    const fullPath = path.resolve(__dirname, relPath);
    return JSON.parse(fs.readFileSync(fullPath, "utf-8"));
};

// Mock Data Imports
import { games } from "../data/games";
import { blogPosts } from "../data/blogs";
import { teamMembers } from "../data/teamMembers";
import { timelineItems, valuesItems } from "../data/about";
import { whyChooseUsFeatures } from "../data/whyChooseUsFeatures";

// Locales
const trLocales = readJSON("../locales/tr.json");
const enLocales = readJSON("../locales/en.json");

const collections = {
    BLOGS: 'blogs',
    GAMES: 'games',
    TEAM_MEMBERS: 'team-members',
    ABOUT_TIMELINE: 'about-timeline',
    ABOUT_VALUES: 'about-values',
    WHY_CHOOSE_US: 'why-choose-us',
};

const getLocaleString = (locales: any, pathStr: string) => {
    return pathStr.split('.').reduce((obj, key) => obj && obj[key], locales) || pathStr;
};

const clearCollection = async (collectionName: string) => {
    console.log(`🧹 Clearing collection: ${collectionName}...`);
    const querySnapshot = await getDocs(collection(db, collectionName));
    const deletePromises = querySnapshot.docs.map(d => deleteDoc(d.ref));
    await Promise.all(deletePromises);
};

const seed = async () => {
    console.log("🚀 Seeding process started...");

    try {
        // Clear all collections first
        const allCollections = Object.values(collections);
        for (const col of allCollections) {
            await clearCollection(col);
        }

        // 1. Games
        console.log("📦 Seeding Games...");
        for (const g of (games as any[])) {
            await setDoc(doc(db, collections.GAMES, g.id), g);
        }

        // 2. Blogs
        console.log("📝 Seeding Blogs...");
        for (const b of (blogPosts as any[])) {
            await setDoc(doc(db, collections.BLOGS, b.id), b);
        }

        // 3. Team Members
        console.log("👥 Seeding Team Members...");
        for (const m of (teamMembers as any[])) {
            await setDoc(doc(db, collections.TEAM_MEMBERS, m.id), m);
        }

        // 4. About Timeline
        console.log("⏳ Seeding Timeline...");
        for (const item of timelineItems) {
            const id = uuidv4();
            const timelineData = {
                id,
                translations: [
                    {
                        language: "tr",
                        year: item.year,
                        title: getLocaleString(trLocales, item.titleKey),
                        desc: getLocaleString(trLocales, item.descKey),
                        badge: getLocaleString(trLocales, item.badgeKey)
                    },
                    {
                        language: "en",
                        year: item.year,
                        title: getLocaleString(enLocales, item.titleKey),
                        desc: getLocaleString(enLocales, item.descKey),
                        badge: getLocaleString(enLocales, item.badgeKey)
                    }
                ]
            };
            await setDoc(doc(db, collections.ABOUT_TIMELINE, id), timelineData);
        }

        // 5. About Values
        console.log("💎 Seeding Values...");
        for (const item of valuesItems) {
            const id = uuidv4();
            const valuesData = {
                id,
                translations: [
                    {
                        language: "tr",
                        icon: item.icon,
                        percentage: item.percentage,
                        colorClass: item.colorClass,
                        iconBgClass: item.iconBgClass,
                        title: getLocaleString(trLocales, item.titleKey),
                        desc: getLocaleString(trLocales, item.descKey)
                    },
                    {
                        language: "en",
                        icon: item.icon,
                        percentage: item.percentage,
                        colorClass: item.colorClass,
                        iconBgClass: item.iconBgClass,
                        title: getLocaleString(enLocales, item.titleKey),
                        desc: getLocaleString(enLocales, item.descKey)
                    }
                ]
            };
            await setDoc(doc(db, collections.ABOUT_VALUES, id), valuesData);
        }

        // 6. Why Choose Us
        console.log("❓ Seeding Why Choose Us...");
        for (const item of whyChooseUsFeatures) {
            const id = uuidv4();
            const featureData = {
                id,
                translations: [
                    {
                        language: "tr",
                        icon: item.icon,
                        title: getLocaleString(trLocales, item.titleKey),
                        desc: getLocaleString(trLocales, item.descKey)
                    },
                    {
                        language: "en",
                        icon: item.icon,
                        title: getLocaleString(enLocales, item.titleKey),
                        desc: getLocaleString(enLocales, item.descKey)
                    }
                ]
            };
            await setDoc(doc(db, collections.WHY_CHOOSE_US, id), featureData);
        }

        console.log("✅ Seeding completed successfully!");
        process.exit(0);
    } catch (error) {
        console.error("❌ Seeding failed:", error);
        process.exit(1);
    }
};

seed();
