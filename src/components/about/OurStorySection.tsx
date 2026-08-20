import React from "react";
import { useTranslation } from "react-i18next";

import { useData } from "../../context/DataContext";
import { collections } from "../../services/firebaseService";

const OurStorySection: React.FC = React.memo(() => {
  const { t, i18n } = useTranslation();
  const { aboutTimeline, loading: dataLoading, refreshData } = useData();
  const currentLang = i18n.language || "tr";

  React.useEffect(() => {
    if (
      aboutTimeline.length === 0 &&
      !dataLoading[collections.ABOUT_TIMELINE]
    ) {
      refreshData(collections.ABOUT_TIMELINE);
    }
  }, [aboutTimeline.length, dataLoading, refreshData]);

  const loading = dataLoading[collections.ABOUT_TIMELINE] ?? true;

  const sortedTimeline = React.useMemo(() => {
    return [...aboutTimeline]
      .map((item: any) => ({
        item,
        trans:
          item.translations?.find((tr: any) => tr.language === currentLang) ||
          item.translations?.[0] ||
          {},
      }))
      .sort((a, b) => Number(a.trans.year) - Number(b.trans.year));
  }, [aboutTimeline, currentLang]);

  return (
    <section>
      <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-primary text-3xl">
          history_edu
        </span>
        {t("about.questLog")}
      </h2>
      <div className="bg-white dark:bg-[#1a202c] border border-slate-200 dark:border-[#2d3748] rounded-2xl p-6 md:p-8 relative overflow-hidden">
        {/* Decorative Line */}
        <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-slate-200 dark:bg-slate-700 hidden md:block" />

        {loading ? (
          <div className="text-center py-4">Yükleniyor...</div>
        ) : (
          <div className="flex flex-col gap-10 relative z-10">
            {sortedTimeline.map(({ item, trans }, index) => (
              <div
                key={item.id || index}
                className="flex flex-col md:flex-row gap-6"
              >
                <div className="hidden md:flex flex-shrink-0 size-4 rounded-full bg-primary border-4 border-[#1a202c] dark:border-[#1a202c] relative z-10 mt-1.5 ml-[-7px]" />
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">
                    {trans.year || item.year} -{" "}
                    {trans.badge || t(item.badgeKey)}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {trans.title || t(item.titleKey)}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
                    {trans.desc || t(item.descKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
});

OurStorySection.displayName = "OurStorySection";

export default OurStorySection;
