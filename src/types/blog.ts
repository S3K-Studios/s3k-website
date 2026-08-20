export interface BlogContentBlock {
    type: 'paragraph' | 'image' | 'code' | 'quote' | 'heading' | 'list';
    text?: string;
    src?: string;
    alt?: string;
    language?: string;
    code?: string;
    items?: string[];
    level?: number;
}

export interface BlogTranslation {
    language: string;
    title: string;
    content: BlogContentBlock[];
    author: string;
    date: string;
    readingTime: string;
    isFeatured?: boolean;
}

export interface BlogPost {
    id: string;
    translations: BlogTranslation[];
}
