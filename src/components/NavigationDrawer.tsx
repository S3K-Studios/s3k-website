import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerContent,
  Button
} from "@heroui/react";
import { Icon } from "@iconify/react";

import { HeartFilledIcon } from "./icons";

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();

  const renderNavLinks = () => (
    <>
      <Link className="text-foreground" to="/" onClick={onClose}>
        {t("header.home")}
      </Link>
      <Link className="text-foreground" to="/blog" onClick={onClose}>
        {t("header.blog")}
      </Link>
      <Link className="text-foreground" to="/about" onClick={onClose}>
        {t("header.about")}
      </Link>
    </>
  );

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerContent className="max-w-xs">
        <DrawerHeader>
          <div className="flex items-center">
            <Icon
              className="text-2xl mr-2 text-primary"
              icon="lucide:gamepad-2"
            />
            <p className="font-bold text-foreground">
              {t("footer.gameStudio")}
            </p>
          </div>
        </DrawerHeader>
        <DrawerBody>
          <div className="flex flex-col gap-4">
            {renderNavLinks()}

            <Button
              fullWidth
              color="secondary"
              startContent={<HeartFilledIcon />}
              variant="flat"
            >
              {t("header.support")}
            </Button>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default NavigationDrawer;
