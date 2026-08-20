import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@heroui/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { useGames } from "../hooks/useGames";

import { DotButton, useDotButton } from "./CarouselDotButton";

export const GameCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const { t } = useTranslation();

  const { games, loading } = useGames();

  if (loading || games.length === 0) return null;

  return (
    <div
      ref={emblaRef}
      className="relative h-[60vh] md:h-[80vh] lg:h-screen w-full overflow-hidden"
    >
      <div className="flex h-full">
        {games.map((game) => (
          <div key={game.id} className="relative flex-shrink-0 w-full h-full">
            <img
              alt={game.title}
              className="w-full h-full object-cover"
              src={game.image.replace("w=600&h=340", "w=1920&h=1080")}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 flex flex-col items-center justify-end text-center px-6 pb-16 md:pb-24">
              <h2 className="text-white text-4xl md:text-6xl font-bold mb-4">
                {game.title}
              </h2>
              <p className="text-white/90 text-base md:text-lg max-w-xl mb-6">
                {game.description}
              </p>
              <Link to={`/games/${game.id}`}>
                <Button color="primary" size="lg">
                  {t("landing.learnMore")}
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === selectedIndex ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => onDotButtonClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
