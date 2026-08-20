import React from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { useData } from "../../context/DataContext";
import { collections } from "../../services/firebaseService";

const ValuesSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { aboutValues, loading: dataLoading, refreshData } = useData();
  const currentLang = i18n.language || "tr";

  React.useEffect(() => {
    if (aboutValues.length === 0 && !dataLoading[collections.ABOUT_VALUES]) {
      refreshData(collections.ABOUT_VALUES);
    }
  }, [aboutValues.length, dataLoading, refreshData]);

  const loading = dataLoading[collections.ABOUT_VALUES] ?? true;

  return (
    <section>
      <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight flex items-center gap-3 mb-8">
        <span className="material-symbols-outlined text-green-500 text-3xl">verified</span>
        {t("about.clanValues")}
      </h2>

      {loading ? (
        <div className="text-center">Yükleniyor...</div>
      ) : (
        <div className="flex flex-col gap-6">
          {aboutValues.map((value, index) => {
            const trans = value.translations?.find((tr: any) => tr.language === currentLang) || value.translations?.[0] || {};
            return (
              <div
                key={value.id || index}
                className="group bg-white dark:bg-[#1a202c] border border-slate-200 dark:border-[#2d3748] rounded-2xl p-6 transition-all border-b-4 hover:border-b-primary cursor-default"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-xl transition-colors flex-shrink-0 ${value.iconBgClass} hover:text-white`}>
                    <Icon className="text-2xl" icon={value.icon} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 truncate">
                      {trans.title || t(value.titleKey)}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                      {trans.desc || t(value.descKey)}
                    </p>
                  </div>
                </div>
                {/* XP Bar visual */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    <span>XP Progress</span>
                    <span>{value.percentage}</span>
                  </div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div
                      className={`${value.colorClass} h-full rounded-full transition-all duration-1000`}
                      style={{ width: value.percentage }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default ValuesSection;
