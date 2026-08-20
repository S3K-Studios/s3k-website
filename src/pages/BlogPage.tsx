import React, { useState } from "react";
import { Pagination } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { useBlogPosts } from "../hooks/useBlogPosts";
import { FeaturedPostCard } from "../components/blog/FeaturedPostCard";
import { PostList } from "../components/blog/PostList";
import { BlogSidebar } from "../components/blog/BlogSidebar";

const BlogPage: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [page, setPage] = useState(1);
  const postsPerPage = 4;
  const currentLang = i18n.language || "tr";

  const { featuredPost, paginatedPosts, totalPages, loading, error } = useBlogPosts({
    page,
    postsPerPage,
    currentLang,
  });

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Yükleniyor...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-danger">Bloglar yüklenirken bir hata oluştu.</div>;
  }

  return (
    <div className="min-h-screen bg-transparent text-foreground font-['Space_Grotesk']">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-20">
        {/* Enhanced Decorative Background Blurs */}
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-primary/20 dark:bg-primary/15 blur-[120px] animate-pulse" />
        <div className="absolute top-60 -left-20 h-[400px] w-[400px] rounded-full bg-secondary/20 dark:bg-secondary/15 blur-[100px]" />
        <div className="absolute -bottom-20 right-1/4 h-[350px] w-[350px] rounded-full bg-blue-500/10 dark:bg-blue-500/10 blur-[90px]" />

        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="mb-12 flex flex-col gap-4 text-center md:text-left">
            <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground-400">
                {t("blog.behindTheScenes")}
              </span>
            </h1>
            <p className="max-w-2xl text-lg text-foreground-500 md:text-xl">
              {t("blog.insightsTutorials")}
            </p>
          </div>

          {featuredPost && (
            <FeaturedPostCard post={featuredPost} currentLang={currentLang} />
          )}
        </div>
      </section>

      {/* Grid Content */}
      <section className="container mx-auto max-w-7xl px-6 py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main List */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">{t("blog.latestPosts")}</h3>
            </div>

            <PostList posts={paginatedPosts} currentLang={currentLang} />

            {totalPages > 1 && (
              <div className="flex justify-center pt-8">
                <Pagination
                  total={totalPages}
                  page={page}
                  onChange={setPage}
                  color="primary"
                />
              </div>
            )}
          </div>

          <BlogSidebar />
        </div>
      </section>
    </div>
  );
};

export default BlogPage;

