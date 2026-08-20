import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getLegalApp } from "../../data/legalApps";
import { LegalAppConfig, LegalDocType } from "../../types/legal";

import {
  renderPrivacyPolicy,
  renderTerms,
  renderDataDeletion,
} from "./legalTemplates";

const docRenderers: Record<
  LegalDocType,
  (app: LegalAppConfig, lang: "tr" | "en") => JSX.Element
> = {
  privacy: renderPrivacyPolicy,
  terms: renderTerms,
  "data-deletion": renderDataDeletion,
};

const LegalPage: React.FC = () => {
  const { appSlug, doc } = useParams<{ appSlug: string; doc: string }>();
  const { i18n } = useTranslation();
  const lang: "tr" | "en" = i18n.language === "tr" ? "tr" : "en";

  const app = getLegalApp(appSlug);
  const isValidDocType =
    doc === "privacy" || doc === "terms" || doc === "data-deletion";
  const docType = doc as LegalDocType;
  const renderer = isValidDocType ? docRenderers[docType] : undefined;

  if (!app || !renderer || !app.docs.includes(docType)) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">
          {lang === "tr" ? "Sayfa Bulunamadı" : "Page Not Found"}
        </h1>
        <p className="text-foreground-500 mb-6">
          {lang === "tr"
            ? "Aradığınız yasal belge mevcut değil."
            : "The legal document you're looking for doesn't exist."}
        </p>
        <Link className="text-primary hover:underline" to="/legal">
          {lang === "tr" ? "Tüm Yasal Sayfalar" : "All Legal Documents"}
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <div className="bg-content1 p-8 rounded-2xl shadow-xl border border-divider">
        {renderer(app, lang)}
      </div>
    </div>
  );
};

export default LegalPage;
