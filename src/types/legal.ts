export type LegalDocType = "privacy" | "terms" | "data-deletion";

export interface LegalAppServices {
    /** Native platform sign-in (Game Center / Play Games), not a Firebase email+password account system */
    platformSignIn?: boolean;
    /** In-app purchases via the store's own billing library (StoreKit / Google Play Billing) */
    iap?: boolean;
    iapProvider?: string;
    /** Advertising SDK */
    ads?: boolean;
    adsProvider?: string;
    /** Leaderboards / achievements via Game Center or Play Games */
    gameServices?: boolean;
    /** Backend used for multiplayer / saved progress, if any */
    backend?: string;
}

export interface LegalAppConfig {
    slug: string;
    name: string;
    supportEmail: string;
    lastUpdated: string;
    services: LegalAppServices;
    docs: LegalDocType[];
}
