import React from "react";
import { Card, CardBody, CardFooter, Avatar } from "@heroui/react";
import { Link } from "react-router-dom";
import { BlogPost } from "../../types/blog";
import { useBlogTranslation } from "../../hooks/useBlogTranslation";

interface PostCardProps {
    post: BlogPost;
    currentLang: string;
}

export const PostCard: React.FC<PostCardProps> = React.memo(({ post, currentLang }) => {
    const translation = useBlogTranslation(post, currentLang);

    if (!translation) return null;

    const firstImage = translation.content.find((c) => c.type === 'image')?.src || "https://images.unsplash.com/photo-1542751371-adc38448a05e";
    const firstPara = translation.content.find((c) => c.type === 'paragraph')?.text;

    return (
        <Card
            as={Link}
            to={`/blog/${post.id}`}
            className="group hover:border-primary/50 transition-all"
            isHoverable
        >
            <CardBody className="p-4 flex flex-col gap-4">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url(${firstImage})` }}
                    />
                    {translation.isFeatured && (
                        <div className="absolute top-2 right-2 z-10">
                            <div className="bg-primary/90 text-primary-foreground p-1.5 rounded-full shadow-lg backdrop-blur-md flex items-center justify-center">
                                <span className="material-symbols-outlined text-[16px]">
                                    push_pin
                                </span>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-xs text-foreground-400">
                        <span>{translation.date} • {translation.readingTime}</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {translation.title}
                    </h3>
                    <p className="text-sm text-foreground-500 line-clamp-2">
                        {firstPara}
                    </p>
                </div>
            </CardBody>
            <CardFooter className="pt-0 p-4 flex items-center gap-2">
                <Avatar size="sm" name={translation.author} className="w-6 h-6" />
                <span className="text-xs font-medium text-foreground-500">{translation.author}</span>
            </CardFooter>
        </Card>
    );
});

PostCard.displayName = "PostCard";
