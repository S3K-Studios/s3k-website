export interface GameTranslation {
    language: string;
    title: string;
    description: string;
    image: string;
    features: string[];
    releaseDate: string;
    storeLinks: { name: string; url: string }[];
}

export interface Game {
    id: string;
    translations: GameTranslation[];
}
