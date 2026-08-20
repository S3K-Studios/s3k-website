import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useGames } from "../hooks/useGames";

import { DotButton, useDotButton } from "./CarouselDotButton";

export const GameCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const { games, loading } = useGames();

  if (loading || games.length === 0) return null;

  return (
    <div ref={emblaRef} className="relative h-[60vh] md:h-[80vh] lg:h-screen w-full overflow-hidden">
      <div className="flex h-full">
        {games.map((game) => (
          <div key={game.id} className="relative flex-shrink-0 w-full h-full">
            <img
              alt={game.title}
              className="w-full h-full object-cover"
              src={game.image.replace("w=600&h=340", "w=1920&h=1080")}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-4xl md:text-6xl font-bold">
                {game.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            className={`w-3 h-3 rounded-full ${index === selectedIndex ? "bg-white" : "bg-white/50"
              }`}
            onClick={() => onDotButtonClick(index)}
          />
        ))}
      </div>
    </div>
  );
};
