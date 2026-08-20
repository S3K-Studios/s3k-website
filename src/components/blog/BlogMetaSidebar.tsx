import React from "react";

import LanguageDropdown from "./LanguageDropdown";

interface BlogMetaSidebarProps {
  blog: any;
  selectedLang: string;
  languageFlags: Record<string, { flag: string; label: string }>;
  onSelectLang: (lang: string) => void;
  translation: any;
  i18nLanguage: string;
}

const BlogMetaSidebar: React.FC<BlogMetaSidebarProps> = ({
  blog,
  selectedLang,
  languageFlags,
  onSelectLang,
  translation,
  i18nLanguage,
}) => (
  <div className="flex flex-col gap-4 text-sm text-gray-700 dark:text-gray-100">
    <div>
      <strong>Yazar:</strong> {blog.author}
    </div>
    <div>
      <strong>Okuma süresi:</strong> {blog.readingTime}
    </div>
    <div>
      <strong>Tarih:</strong> {blog.date}
    </div>
    <div>
      <strong>Dil:</strong>{" "}
      {blog.translations.length > 1 ? (
        <LanguageDropdown
          languageFlags={languageFlags}
          languages={blog.translations}
          selectedLang={selectedLang}
          onSelect={onSelectLang}
        />
      ) : (
        <span className="ml-2">
          {languageFlags[translation?.language || "tr"]?.flag}{" "}
          {languageFlags[translation?.language || "tr"]?.label ||
            translation?.language}
        </span>
      )}
    </div>
    {/* Dinamik uyarı: sadece bir dil varsa ve sitenin dili bu dile eşit değilse */}
    {blog.translations.length === 1 &&
      i18nLanguage !== blog.translations[0].language && (
        <div className="text-xs text-red-500">
          Bu blog yazısı sadece{" "}
          {languageFlags[blog.translations[0].language]?.label ||
            blog.translations[0].language}{" "}
          dilinde mevcuttur.
        </div>
      )}
  </div>
);

export default BlogMetaSidebar;
