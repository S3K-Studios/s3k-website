import { useState, useEffect } from 'react';
import { fetchCollectionData } from '../services/firebaseService';

export const useCollection = (collectionName: string) => {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const fetchedData = await fetchCollectionData(collectionName);
                setData(fetchedData);
            } catch (err: any) {
                setError(err);
                console.error(`${collectionName} çekilirken hata:`, err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [collectionName]);

    return { data, loading, error };
};
