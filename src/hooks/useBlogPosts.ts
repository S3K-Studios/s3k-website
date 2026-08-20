import { useEffect, useMemo } from 'react';
import { BlogPost } from '../types/blog';
import { collections } from '../services/firebaseService';
import { useData } from '../context/DataContext';

interface UseBlogPostsOptions {
    page: number;
    postsPerPage: number;
    currentLang: string;
}

export const useBlogPosts = ({ page, postsPerPage, currentLang }: UseBlogPostsOptions) => {
    const { blogPosts: rawPosts, loading: dataLoading, error: dataError, refreshData } = useData();

    useEffect(() => {
        if (rawPosts.length === 0 && !dataLoading[collections.BLOGS]) {
            refreshData(collections.BLOGS);
        }
    }, [rawPosts.length, dataLoading, refreshData]);

    const getTranslation = (post: BlogPost) => {
        return post.translations.find(t => t.language === currentLang) ||
            post.translations.find(t => t.language === 'tr') ||
            post.translations[0];
    };

    // Derived states
    const sortedPosts = useMemo(() => {
        return [...rawPosts].sort((a, b) => {
            const dateA = getTranslation(a)?.date || "";
            const dateB = getTranslation(b)?.date || "";
            return new Date(dateB).getTime() - new Date(dateA).getTime();
        });
    }, [rawPosts, currentLang]);

    const featuredPost = useMemo(() =>
        sortedPosts.find(post => getTranslation(post)?.isFeatured) || sortedPosts[0] || null
        , [sortedPosts, currentLang]);

    const otherPosts = useMemo(() =>
        featuredPost ? sortedPosts.filter(post => post.id !== featuredPost.id) : sortedPosts
        , [sortedPosts, featuredPost]);

    const totalPages = useMemo(() =>
        Math.ceil(otherPosts.length / postsPerPage)
        , [otherPosts.length, postsPerPage]);

    const paginatedPosts = useMemo(() =>
        otherPosts.slice((page - 1) * postsPerPage, page * postsPerPage)
        , [otherPosts, page, postsPerPage]);

    return {
        featuredPost,
        otherPosts,
        paginatedPosts,
        totalPages,
        loading: dataLoading[collections.BLOGS] ?? true,
        error: dataError[collections.BLOGS]
    };
};
