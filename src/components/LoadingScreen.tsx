import React from "react";
import { Spinner } from "@heroui/react";
import { useTranslation } from "react-i18next";

const LoadingScreen: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <Spinner className="mb-6" color="primary" size="lg" />
      <span className="text-lg text-foreground-500">{t("common.loading")}</span>
    </div>
  );
};

export default LoadingScreen;
