import { LegalAppConfig } from "../types/legal";
import { splitomicLegalContent } from "../pages/legal/content/splitomic";

/**
 * Registry of apps that need their own legal pages (privacy, terms, data
 * deletion). Each app's content is authored on its own, in its own file
 * under src/pages/legal/content/ — legal text differs too much between apps
 * (accounts, ads, backend, IAP) to safely share a generic template.
 *
 * To publish legal pages for a new app:
 *   1. Create src/pages/legal/content/<slug>.tsx (copy splitomic.tsx's shape,
 *      then write that app's real practices from scratch).
 *   2. Add a config entry below pointing `content` at it.
 * Pages render at /legal/:slug/:doc — no route changes needed.
 */
export const legalApps: LegalAppConfig[] = [
  {
    slug: "splitomic",
    name: "Splitomic",
    supportEmail: "info@s3kstudios.com",
    lastUpdated: "2026-09-16",
    docs: ["privacy", "terms", "data-deletion"],
    content: splitomicLegalContent,
  },
];

export const getLegalApp = (slug: string): LegalAppConfig | undefined =>
  legalApps.find((a) => a.slug === slug);
