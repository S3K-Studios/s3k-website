import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { collections, fetchCollectionData } from '../services/firebaseService';

interface DataContextType {
    games: any[];
    blogPosts: any[];
    teamMembers: any[];
    aboutTimeline: any[];
    aboutValues: any[];
    whyChooseUs: any[];
    loading: { [key: string]: boolean };
    error: { [key: string]: Error | null };
    refreshData: (collectionName?: string) => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState({
        games: [] as any[],
        blogPosts: [] as any[],
        teamMembers: [] as any[],
        aboutTimeline: [] as any[],
        aboutValues: [] as any[],
        whyChooseUs: [] as any[],
    });

    const [loading, setLoading] = useState<{ [key: string]: boolean }>({});
    const [error, setError] = useState<{ [key: string]: Error | null }>({});

    const fetchData = useCallback(async (collectionName: string) => {
        setLoading(prev => ({ ...prev, [collectionName]: true }));
        setError(prev => ({ ...prev, [collectionName]: null }));
        try {
            const fetchedData = await fetchCollectionData(collectionName);

            // Map collection name to state key
            const stateKeyMap: { [key: string]: keyof typeof data } = {
                [collections.GAMES]: 'games',
                [collections.BLOGS]: 'blogPosts',
                [collections.TEAM_MEMBERS]: 'teamMembers',
                [collections.ABOUT_TIMELINE]: 'aboutTimeline',
                [collections.ABOUT_VALUES]: 'aboutValues',
                [collections.WHY_CHOOSE_US]: 'whyChooseUs',
            };

            const stateKey = stateKeyMap[collectionName];
            if (stateKey) {
                setData(prev => ({ ...prev, [stateKey]: fetchedData }));
            }
        } catch (err: any) {
            setError(prev => ({ ...prev, [collectionName]: err }));
            console.error(`Error fetching ${collectionName}:`, err);
        } finally {
            setLoading(prev => ({ ...prev, [collectionName]: false }));
        }
    }, []);

    const refreshData = useCallback(async (collectionName?: string) => {
        if (collectionName) {
            await fetchData(collectionName);
        } else {
            const allCollections = [
                collections.GAMES,
                collections.BLOGS,
                collections.TEAM_MEMBERS,
                collections.ABOUT_TIMELINE,
                collections.ABOUT_VALUES,
                collections.WHY_CHOOSE_US
            ];
            await Promise.all(allCollections.map(c => fetchData(c)));
        }
    }, [fetchData]);

    // Initial load for common collections (optional, or lazy load)
    useEffect(() => {
        // We can choose to pre-fetch everything or let hooks trigger it
    }, []);

    const value = {
        ...data,
        loading,
        error,
        refreshData
    };

    return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export const useData = () => {
    const context = useContext(DataContext);
    if (context === undefined) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};
