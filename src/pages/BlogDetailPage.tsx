import { useTranslation } from "react-i18next";
import { Button, Card } from "@heroui/react";
import React from "react";
import { Link, useParams } from "react-router-dom";

import BlogContent from "../components/blog/BlogContent";
import BlogMetaMobile from "../components/blog/BlogMetaMobile";
import BlogMetaSidebar from "../components/blog/BlogMetaSidebar";
import { useBlogTranslation } from "../hooks/useBlogTranslation";
import { useBlogPosts } from "../hooks/useBlogPosts";

const languageFlags: Record<string, { flag: string; label: string }> = {
  tr: { flag: "🇹🇷", label: "Türkçe" },
  en: { flag: "🇬🇧", label: "English" },
};

const BlogDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { i18n } = useTranslation();

  const { paginatedPosts, featuredPost, loading, error } = useBlogPosts({ page: 1, postsPerPage: 1000, currentLang: i18n.language || "tr" });
  const allPosts = React.useMemo(() => {
    const list = [...paginatedPosts];
    if (featuredPost) list.push(featuredPost);
    return list;
  }, [paginatedPosts, featuredPost]);

  const blog = React.useMemo(() => allPosts.find((b) => b.id === id) || null, [allPosts, id]);

  const [selectedLang, setSelectedLang] = React.useState(i18n.language || "tr");

  React.useEffect(() => {
    setSelectedLang(i18n.language || "tr");
  }, [i18n.language]);

  const translation = useBlogTranslation(blog, selectedLang);

  if (loading) return <div className="container mx-auto px-4 py-10 mt-16 text-center">Yükleniyor...</div>;
  if (error) return <div className="container mx-auto px-4 py-10 mt-16 text-center text-danger">Blog yüklenirken hata oluştu.</div>;
  if (!blog) return <div className="container mx-auto px-4 py-10 mt-16 text-center">Blog yazısı bulunamadı.</div>;

  return (
    <div className="container mx-auto px-4 py-10 mt-16 max-w-4xl">
      <div className="mb-6">
        <Link to="/blog">
          <Button className="bg-white dark:bg-gray-900" variant="flat">
            &larr; Bloglara Geri Dön
          </Button>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <Card className="max-w-2xl w-full p-6 flex-1">
          <div className="flex items-center gap-2 mb-2" />
          <BlogMetaMobile
            blog={blog}
            i18nLanguage={i18n.language}
            languageFlags={languageFlags}
            selectedLang={selectedLang}
            translation={translation}
            onSelectLang={setSelectedLang}
          />
          <BlogContent
            content={translation?.content || []}
            title={translation?.title || ""}
          />
        </Card>
        <Card className="w-full max-w-xs p-6 flex-shrink-0 hidden md:block self-start bg-white dark:bg-gray-900">
          <BlogMetaSidebar
            blog={blog}
            i18nLanguage={i18n.language}
            languageFlags={languageFlags}
            selectedLang={selectedLang}
            translation={translation}
            onSelectLang={setSelectedLang}
          />
        </Card>
      </div>
    </div>
  );
};

export default BlogDetailPage;
