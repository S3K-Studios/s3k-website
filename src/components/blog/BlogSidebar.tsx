import React from "react";
import { Card, Input, Chip, Button } from "@heroui/react";
import { Link } from "react-router-dom";
import { SearchIcon } from "../icons";
import { useTranslation } from "react-i18next";

export const BlogSidebar: React.FC = React.memo(() => {
    const { t } = useTranslation();

    return (
        <aside className="lg:col-span-4 space-y-8 lg:pt-[72px]">
            <Card className="p-6">
                <h4 className="mb-4 text-lg font-bold">{t("blog.search")}</h4>
                <Input
                    placeholder={t("blog.searchPlaceholder")}
                    startContent={<SearchIcon className="text-foreground-400" />}
                    variant="bordered"
                    radius="lg"
                />
            </Card>

            <Card className="p-6">
                <h4 className="mb-4 text-lg font-bold">{t("blog.popularTopics")}</h4>
                <div className="flex flex-wrap gap-2">
                    {["#IndieDev", "#UnrealEngine", "#LevelDesign", "#Art", "#DevLog"].map((tag) => (
                        <Chip
                            key={tag}
                            variant="flat"
                            className="hover:bg-primary hover:text-white cursor-pointer transition-colors"
                        >
                            {tag}
                        </Chip>
                    ))}
                </div>
            </Card>

            <Card className="p-6">
                <h4 className="mb-4 text-lg font-bold">{t("blog.trending")}</h4>
                <div className="flex flex-col gap-4">
                    {[
                        { id: 1, title: "Why we switched from Unity to Godot" },
                        { id: 2, title: "Top 10 assets for prototyping" },
                        { id: 3, title: "Marketing your game with 0 budget" },
                    ].map((item) => (
                        <Link
                            key={item.id}
                            to="#"
                            className="group flex gap-3 items-center"
                        >
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-divider text-xs font-bold group-hover:bg-primary group-hover:text-white transition-colors">
                                {item.id}
                            </span>
                            <span className="text-sm font-medium group-hover:text-primary transition-colors">
                                {item.title}
                            </span>
                        </Link>
                    ))}
                </div>
            </Card>

            <Card className="bg-primary text-primary-foreground p-6 shadow-lg border-none overflow-hidden relative">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                <h4 className="relative z-10 mb-2 text-xl font-bold">{t("blog.joinInnerCircle")}</h4>
                <p className="relative z-10 mb-6 text-sm opacity-90">
                    {t("blog.newsletterDesc")}
                </p>
                <div className="relative z-10 flex flex-col gap-3">
                    <Input
                        placeholder={t("blog.enterEmail")}
                        variant="flat"
                        className="bg-primary-foreground/10"
                        classNames={{
                            input: "text-primary-foreground placeholder:text-primary-foreground/60",
                        }}
                    />
                    <Button className="bg-white text-primary font-bold">
                        {t("blog.subscribe")}
                    </Button>
                </div>
            </Card>
        </aside>
    );
});

BlogSidebar.displayName = "BlogSidebar";
