import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import React from "react";

interface LanguageDropdownProps {
  languages: { language: string }[];
  selectedLang: string;
  languageFlags: Record<string, { flag: string; label: string }>;
  onSelect: (lang: string) => void;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({
  languages,
  selectedLang,
  languageFlags,
  onSelect,
}) => (
  <Dropdown>
    <DropdownTrigger>
      <Button color="default" size="sm" variant="flat">
        {languageFlags[selectedLang]?.flag || selectedLang}{" "}
        {languageFlags[selectedLang]?.label || selectedLang}
      </Button>
    </DropdownTrigger>
    <DropdownMenu
      aria-label="Dil Seçici"
      selectedKeys={[selectedLang]}
      selectionMode="single"
      onAction={(key) => onSelect(String(key))}
    >
      {languages.map((t) => (
        <DropdownItem
          key={t.language}
          textValue={languageFlags[t.language]?.label || t.language}
        >
          {languageFlags[t.language]?.flag}{" "}
          {languageFlags[t.language]?.label || t.language}
        </DropdownItem>
      ))}
    </DropdownMenu>
  </Dropdown>
);

export default LanguageDropdown;
