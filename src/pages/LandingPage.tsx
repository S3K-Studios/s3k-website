import React, { useEffect } from "react";
import { Button, Card, CardBody, Image } from "@heroui/react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { GameCarousel } from "../components/GameCarousel";
import { useGames } from "../hooks/useGames";

const LandingPage: React.FC = () => {
  const { t } = useTranslation();
  const { games, loading: gamesLoading } = useGames();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <>
      <GameCarousel />
      <div className="container mx-auto px-4 py-12">
        <section className="text-center mb-16" id="welcome-section">
          <h1 className="text-4xl font-bold mb-4">{t("landing.welcome")}</h1>
          <p className="text-xl mb-8">{t("landing.creatingWorlds")}</p>
        </section>

        <section className="mb-16" id="featured-games">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t("landing.featuredGames")}
          </h2>
          {gamesLoading && (
            <div className="text-center py-8">Yükleniyor...</div>
          )}
          {!gamesLoading && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {games.map((game) => (
                <Card
                  key={game.id}
                  className="h-full flex flex-col hover:shadow-lg transition-shadow"
                >
                  <CardBody className="flex flex-col">
                    <Image
                      alt={game.title}
                      className="w-full h-48 object-cover mb-4 rounded-lg"
                      src={game.image}
                    />
                    <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                    <p className="text-foreground-500 mb-4 flex-grow">
                      {game.description}
                    </p>
                    <div className="mt-auto pt-4">
                      <Link to={`/games/${game.id}`}>
                        <Button fullWidth color="primary" variant="flat">
                          {t("landing.learnMore")}
                        </Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default LandingPage;
