export type LegalDocType = "privacy" | "terms" | "data-deletion";

export type LegalRenderer = (
  app: LegalAppConfig,
  lang: "tr" | "en",
) => JSX.Element;

export type LegalContent = Record<LegalDocType, LegalRenderer>;

export interface LegalAppConfig {
  slug: string;
  name: string;
  supportEmail: string;
  lastUpdated: string;
  docs: LegalDocType[];
  /** This app's own privacy/terms/data-deletion content — authored per app, not shared. */
  content: LegalContent;
}
