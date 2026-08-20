import React from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

import { useData } from "../../context/DataContext";
import { collections } from "../../services/firebaseService";

const WhyChooseUsSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { whyChooseUs, loading: dataLoading, refreshData } = useData();
  const currentLang = i18n.language || "tr";

  React.useEffect(() => {
    if (whyChooseUs.length === 0 && !dataLoading[collections.WHY_CHOOSE_US]) {
      refreshData(collections.WHY_CHOOSE_US);
    }
  }, [whyChooseUs.length, dataLoading, refreshData]);

  const loading = dataLoading[collections.WHY_CHOOSE_US] ?? true;

  if (!loading && whyChooseUs.length === 0) return null;

  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-8">{t("landing.whyChooseUs")}</h2>
      {loading ? (
        <div className="text-center">Yükleniyor...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((feature, index) => {
            const trans =
              feature.translations?.find(
                (tr: any) => tr.language === currentLang,
              ) ||
              feature.translations?.[0] ||
              {};

            return (
              <div
                key={feature.id || index}
                className="flex flex-col items-center"
              >
                <Icon
                  className="text-5xl text-primary mb-4"
                  icon={trans.icon || feature.icon}
                />
                <h3 className="text-xl font-semibold mb-2">
                  {trans.title || t(feature.titleKey)}
                </h3>
                <p className="text-foreground-500">
                  {trans.desc || t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default WhyChooseUsSection;
