import React from "react";

import LanguageDropdown from "./LanguageDropdown";

interface BlogMetaMobileProps {
  blog: any;
  selectedLang: string;
  languageFlags: Record<string, { flag: string; label: string }>;
  onSelectLang: (lang: string) => void;
  translation: any;
  i18nLanguage: string;
}

const BlogMetaMobile: React.FC<BlogMetaMobileProps> = ({
  blog,
  selectedLang,
  languageFlags,
  onSelectLang,
  translation,
  i18nLanguage,
}) => (
  <div className="block md:hidden mb-4">
    <div className="flex flex-wrap gap-4 text-sm text-gray-500 items-center">
      <span>{blog.date}</span>
      <span>• {blog.author}</span>
      <span>• {blog.readingTime}</span>
      {blog.translations.length > 1 ? (
        <LanguageDropdown
          languageFlags={languageFlags}
          languages={blog.translations}
          selectedLang={selectedLang}
          onSelect={onSelectLang}
        />
      ) : (
        <span>
          • {languageFlags[translation?.language || "tr"]?.flag}{" "}
          {languageFlags[translation?.language || "tr"]?.label ||
            translation?.language}
        </span>
      )}
      {/* Dinamik uyarı: sadece bir dil varsa ve sitenin dili bu dile eşit değilse */}
      {blog.translations.length === 1 &&
        i18nLanguage !== blog.translations[0].language && (
          <span className="text-xs text-red-500">
            Bu blog yazısı sadece{" "}
            {languageFlags[blog.translations[0].language]?.label ||
              blog.translations[0].language}{" "}
            dilinde mevcuttur.
          </span>
        )}
    </div>
  </div>
);

export default BlogMetaMobile;
