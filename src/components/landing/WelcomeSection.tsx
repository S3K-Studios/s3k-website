import React from "react";
import { useTranslation } from "react-i18next";

const WelcomeSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-screen bg-[url('/background.jpg')] bg-cover bg-center flex items-center justify-center mb-8">
      <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0 z-0" />
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 py-24 text-center">
          <h1 className="text-6xl font-bold mb-4 text-white drop-shadow-lg">
            {t("landing.welcome")}
          </h1>
          <p className="text-xl mb-8 text-white drop-shadow">
            {t("landing.creatingWorlds")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
