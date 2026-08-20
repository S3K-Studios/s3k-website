import { LegalAppConfig } from "../types/legal";

/**
 * Registry of apps that need their own legal pages (privacy, terms, data deletion).
 * To publish legal pages for a new app, add a config object here — no route or
 * page changes needed. Pages render at /legal/:slug/:doc.
 */
export const legalApps: LegalAppConfig[] = [
    {
        slug: "atomic-boom",
        name: "Atomic Boom",
        supportEmail: "info@s3kstudios.com",
        lastUpdated: "2026-08-20",
        services: {
            platformSignIn: true,
            iap: true,
            iapProvider: "Apple App Store / Google Play (StoreKit & Google Play Billing)",
            ads: true,
            adsProvider: "Google AdMob",
            gameServices: true,
            backend: "Firebase (Realtime Database)",
        },
        docs: ["privacy", "terms", "data-deletion"],
    },
];

export const getLegalApp = (slug: string): LegalAppConfig | undefined =>
    legalApps.find((a) => a.slug === slug);
