import React from "react";
import { useTranslation } from "react-i18next";

const AboutHeroSection: React.FC = React.memo(() => {
    const { t } = useTranslation();

    return (
        <div className="relative w-full rounded-3xl overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center justify-center group">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                    backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAxHoPa3tq31kxRgy9Ix3Ho4lsPauqXqeK3uVrXdQlWsSq174HjfKvoDYDFL1BH8f9AB0aF1Wf3c8pTlpQtvBz6S5P1ZUlgcPOGxAiwf_eN2MjNus3TLgw_zw4pw3vMQ-eJOXXAJBUO70y1Yi4pX4Boh25bmIgan5CBkJuEUp_-Fdsuq3rLmVuOwog2UwGTzq2qIz4NNjNMY_sGmxiDNAqd8VPeE25rzqs8XFXhznWEpPf8kTOaYL958kz657fNqkzruzvkR204A3VA")'
                }}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />

            <div className="relative z-10 text-center max-w-3xl px-6 flex flex-col items-center gap-6">
                <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tighter drop-shadow-2xl">
                    {t("about.meetThe")}{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                        {t("about.makers")}
                    </span>
                </h1>
                <p className="text-slate-300 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
                    {t("about.heroDesc")}
                </p>
                <div className="flex gap-4 pt-4">
                    {/* Buttons or CTAs can be added here in the future without cluttering history */}
                </div>
            </div>
        </div>
    );
});

AboutHeroSection.displayName = "AboutHeroSection";

export default AboutHeroSection;
