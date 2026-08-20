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
  /** Slug into the legal app registry (src/data/legalApps.ts) — links this showcase entry to its privacy/terms/data-deletion pages, if any. */
  legalSlug?: string;
  /** Whether this game is shown on the public site. Missing/undefined is treated as active, for backward compatibility with existing docs. */
  active?: boolean;
  translations: GameTranslation[];
}
