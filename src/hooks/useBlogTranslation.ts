import { useMemo } from 'react';
import { BlogPost, BlogTranslation } from '../types/blog';

export const useBlogTranslation = (post: BlogPost | null, currentLang: string): BlogTranslation | null => {
    return useMemo(() => {
        if (!post) return null;

        // 1. Try exact match
        const exactMatch = post.translations.find((t) => t.language === currentLang);
        if (exactMatch) return exactMatch;

        // 2. Try default language (tr)
        const trMatch = post.translations.find((t) => t.language === 'tr');
        if (trMatch) return trMatch;

        // 3. Fallback to anything available
        return post.translations[0] || null;
    }, [post, currentLang]);
};
