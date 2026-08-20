import React from "react";
import { Card, CardBody, Chip, Avatar, Button } from "@heroui/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BlogPost } from "../../types/blog";
import { useBlogTranslation } from "../../hooks/useBlogTranslation";

interface FeaturedPostCardProps {
    post: BlogPost;
    currentLang: string;
}

export const FeaturedPostCard: React.FC<FeaturedPostCardProps> = React.memo(({ post, currentLang }) => {
    const { t } = useTranslation();
    const translation = useBlogTranslation(post, currentLang);

    if (!translation) return null;

    const firstImage = translation.content.find((c) => c.type === 'image')?.src || "https://images.unsplash.com/photo-1542751371-adc38448a05e";
    const firstPara = translation.content.find((c) => c.type === 'paragraph')?.text;

    return (
        <Card
            as={Link}
            to={`/blog/${post.id}`}
            className="group grid md:grid-cols-2 gap-0 overflow-hidden hover:border-primary/50 transition-all duration-300"
            isHoverable
        >
            <div className="relative h-64 md:h-auto overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${firstImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r md:from-transparent md:to-background/50" />
            </div>
            <CardBody className="flex flex-col justify-center gap-6 p-8 md:p-12">
                <div className="flex items-center gap-3">
                    <Chip
                        color="primary"
                        variant="flat"
                        size="sm"
                        className="font-bold uppercase tracking-wider"
                        startContent={<span className="material-symbols-outlined text-[14px]">push_pin</span>}
                    >
                        {t("blog.featured")}
                    </Chip>
                    <span className="text-sm text-foreground-400">{translation.date}</span>
                </div>
                <h2 className="text-3xl font-bold leading-tight md:text-4xl group-hover:text-primary transition-colors">
                    {translation.title}
                </h2>
                <p className="text-foreground-500 line-clamp-3">
                    {firstPara}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4">
                    <div className="flex items-center gap-3">
                        <Avatar size="sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d" name={translation.author} />
                        <div className="flex flex-col">
                            <span className="text-sm font-bold">{translation.author}</span>
                            <span className="text-xs text-foreground-400">Developer</span>
                        </div>
                    </div>
                    <Button
                        color="primary"
                        variant="light"
                        endContent={<span className="material-symbols-outlined text-[18px]">arrow_forward</span>}
                    >
                        {t("blog.readArticle")}
                    </Button>
                </div>
            </CardBody>
        </Card>
    );
});

FeaturedPostCard.displayName = "FeaturedPostCard";
