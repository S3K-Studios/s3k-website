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
            <div className="flex flex-col gap-1 mt-2">
              <Link className="text-primary hover:underline" to="/atomicboom/privacy">
                {t("footer.privacyPolicy")}
              </Link>
              <Link className="text-primary hover:underline" to="/atomicboom/terms">
                {t("footer.termsOfService")}
              </Link>
              <Link className="text-primary hover:underline" to="/atomicboom/data-deletion">
                {t("footer.dataDeletion")}
              </Link>
            </div>
          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
