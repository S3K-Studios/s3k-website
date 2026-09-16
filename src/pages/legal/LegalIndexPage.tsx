import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { legalApps } from "../../data/legalApps";
import { LegalDocType } from "../../types/legal";

const docLabels: Record<LegalDocType, { tr: string; en: string }> = {
  privacy: { tr: "Gizlilik Politikası", en: "Privacy Policy" },
  terms: { tr: "Kullanım Şartları", en: "Terms of Service" },
  "data-deletion": { tr: "Hesap ve Veri Silme", en: "Account & Data Deletion" },
};

const LegalIndexPage: React.FC = () => {
  const { i18n } = useTranslation();
  const lang: "tr" | "en" = i18n.language === "tr" ? "tr" : "en";

  return (
    <div className="container mx-auto px-4 pt-24 pb-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-2">
        {lang === "tr" ? "Yasal Sayfalar" : "Legal Documents"}
      </h1>
      <p className="text-foreground-500 mb-8">
        {lang === "tr"
          ? "S3K Studios uygulamalarına ait gizlilik politikası, kullanım şartları ve veri silme sayfaları."
          : "Privacy policy, terms of service, and data deletion pages for S3K Studios apps."}
      </p>
      <div className="flex flex-col gap-6">
        {legalApps.map((app) => (
          <div
            key={app.slug}
            className="bg-content1 p-6 rounded-2xl border border-divider"
          >
            <div className="flex items-center gap-3 mb-3">
              {app.icon && (
                <img
                  alt={app.name}
                  className="w-8 h-8 rounded-lg object-cover"
                  src={app.icon}
                />
              )}
              <h2 className="text-xl font-semibold">{app.name}</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {app.docs.map((doc) => (
                <Link
                  key={doc}
                  className="text-primary hover:underline"
                  to={`/legal/${app.slug}/${doc}`}
                >
                  {docLabels[doc][lang]}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LegalIndexPage;
