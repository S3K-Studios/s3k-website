import React from "react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-content1 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">
              {t("footer.gameStudio")}
            </h3>
            <p className="text-sm text-foreground-500">
              {t("footer.creatingImmersive")}
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">
              {t("footer.connectWithUs")}
            </h4>
            <div className="flex space-x-4">
              <Icon
                className="text-2xl text-foreground-500 hover:text-primary cursor-pointer"
                icon="lucide:twitter"
              />
              <Icon
                className="text-2xl text-foreground-500 hover:text-primary cursor-pointer"
                icon="lucide:facebook"
              />
              <Icon
                className="text-2xl text-foreground-500 hover:text-primary cursor-pointer"
                icon="lucide:instagram"
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 text-sm text-foreground-500">
            <p>
              &copy; 2025 {t("footer.gameStudio")}.{" "}
              {t("footer.allRightsReserved")}
            </p>
            <Link
              className="text-primary hover:underline mt-2 inline-block"
              to="/legal"
            >
              {t("footer.legal")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
