import React from "react";
import { Card, CardBody, Image, Button } from "@heroui/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGames } from "../../hooks/useGames";



const FeaturedGamesSection: React.FC = () => {
  const { t } = useTranslation();
  const { games, loading } = useGames();

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-center">
        {t("landing.featuredGames")}
      </h2>
      {loading ? (
        <div className="text-center py-4">Yükleniyor...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game) => (
            <Card key={game.id} className="hover:shadow-lg transition-shadow">
              <CardBody className="p-4">
                <div className="w-full mb-4">
                  <Image
                    alt={game.title}
                    className="w-full h-48 object-cover rounded-lg"
                    classNames={{
                      wrapper: "w-full"
                    }}
                    src={game.image}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{game.title}</h3>
                <p className="text-foreground-500 mb-4">{game.description}</p>
                <Link to={`/games/${game.id}`}>
                  <Button fullWidth color="primary" variant="flat">
                    {t("landing.learnMore")}
                  </Button>
                </Link>
              </CardBody>
            </Card>
          ))}
        </div>
      )}
    </section>
  );
};

export default FeaturedGamesSection;
