import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/react";
import clsx from "clsx";

import { ThemeSwitch } from "./theme-switch";
import { Icon } from "@iconify/react";
import { HeartFilledIcon } from "./icons";

interface HeaderProps {
  onOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpen }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language || "en";
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLangChange = (key: React.Key) => {
    i18n.changeLanguage(String(key));
  };

  const showTransparentHeader = !isScrolled && isLandingPage;

  const textClass = clsx({
    "text-white": showTransparentHeader,
    "text-foreground": !showTransparentHeader,
  });

  const renderNavLinks = () => (
    <>
      <NavbarItem>
        <Link className={textClass} to="/">
          {t("header.home")}
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link className={textClass} to="/blog">
          {t("header.blog")}
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Link className={textClass} to="/about">
          {t("header.about")}
        </Link>
      </NavbarItem>
    </>
  );

  return (
    <>
      <Navbar
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          {
            "bg-transparent": showTransparentHeader,
            "bg-background/80 backdrop-blur-sm":
              !showTransparentHeader,
          }
        )}
      >
        <div className="w-full transition-all duration-300 flex items-center justify-between container mx-auto">
          <NavbarBrand>
            <Icon
              className={clsx("text-2xl mr-2", {
                "text-white": showTransparentHeader,
                "text-primary": !showTransparentHeader,
              })}
              icon="lucide:gamepad-2"
            />
            <p className={clsx("font-bold", textClass)}>
              {t("footer.gameStudio")}
            </p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            {renderNavLinks()}
          </NavbarContent>
          <NavbarContent className="hidden sm:flex" justify="end">
            <NavbarItem>
              <ThemeSwitch className={textClass} />
            </NavbarItem>
            <NavbarItem>
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    className={clsx("capitalize", {
                      "bg-transparent text-white border border-transparent hover:border-white/50 transition-colors":
                        showTransparentHeader,
                    })}
                    color="default"
                    variant="flat"
                  >
                    {currentLang.startsWith("tr") ? "Türkçe" : "English"}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Language Switcher"
                  selectedKeys={[currentLang]}
                  selectionMode="single"
                  onAction={handleLangChange}
                >
                  <DropdownItem key="en">English</DropdownItem>
                  <DropdownItem key="tr">Türkçe</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
            <NavbarItem>
              <Button
                className={clsx({
                  "bg-transparent text-white border border-transparent hover:border-white/50 transition-colors":
                    showTransparentHeader,
                })}
                color="secondary"
                startContent={<HeartFilledIcon className={textClass} />}
                variant="flat"
              >
                {t("header.support")}
              </Button>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent className="sm:hidden" justify="end">
            <Button isIconOnly variant="flat" onPress={onOpen}>
              <Icon className={textClass} icon="heroicons-outline:menu-alt-3" />
            </Button>
          </NavbarContent>
        </div>
      </Navbar>
    </>
  );
};

export default Header;
