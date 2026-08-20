import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardBody, Image, Button, Chip } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTranslation } from "react-i18next";

import { useGames } from "../hooks/useGames";
import { getLegalApp } from "../data/legalApps";

const legalDocLabels: Record<string, { tr: string; en: string }> = {
  privacy: { tr: "Gizlilik Politikası", en: "Privacy Policy" },
  terms: { tr: "Kullanım Şartları", en: "Terms of Service" },
  "data-deletion": { tr: "Hesap ve Veri Silme", en: "Account & Data Deletion" },
};

const storeIcon = (storeName: string) => {
  const name = storeName.toLowerCase();

  if (name.includes("app store")) return "lucide:apple";
  if (name.includes("google play")) return "lucide:play";

  return "lucide:external-link";
};

const GameDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const lang: "tr" | "en" = i18n.language === "tr" ? "tr" : "en";
  const { games, loading, error } = useGames();

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center text-xl">
        Yükleniyor...
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-12 text-center text-xl text-danger">
        Oyun detayları yüklenirken hata oluştu.
      </div>
    );
  }

  const game = games.find((g) => g.id === id);
  const legalApp = game ? getLegalApp(game.legalSlug ?? game.id) : undefined;

  if (!game) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">
          {t("gameDetail.gameNotFound")}
        </h1>
        <p>{t("gameDetail.gameNotAvailable")}</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="mb-6">
        <Link to="/#welcome-section">
          <Button variant="flat">&larr; {t("gameDetail.goBack")}</Button>
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <Card className="flex-1">
          <CardBody>
            <Image
              alt={game.title}
              className="w-full h-64 object-cover mb-6 rounded-lg"
              src={game.image}
            />
            <h1 className="text-4xl font-bold mb-4">{game.title}</h1>
            <p className="text-lg whitespace-pre-line">{game.description}</p>
          </CardBody>
        </Card>
        <Card className="w-full md:w-1/3 lg:w-1/4">
          <CardBody>
            <h2 className="text-xl font-bold mb-4">
              {t("gameDetail.gameInfo")}
            </h2>
            <div className="mb-4">
              <h3 className="font-semibold">{t("gameDetail.releaseDate")}</h3>
              <p>{game.releaseDate}</p>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold">{t("gameDetail.features")}</h3>
              <div className="flex flex-wrap gap-2 mt-2">
                {game.features.map((feature, idx) => (
                  <Chip key={idx} color="primary" variant="flat">
                    {feature}
                  </Chip>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold">{t("gameDetail.storeLinks")}</h3>
              <div className="flex flex-col gap-2 mt-2">
                {game.storeLinks.map((link, idx) => (
                  <Button
                    key={idx}
                    fullWidth
                    as="a"
                    href={link.url}
                    startContent={<Icon icon={storeIcon(link.name)} />}
                    target="_blank"
                  >
                    {link.name}
                  </Button>
                ))}
              </div>
            </div>
            {legalApp && (
              <div className="mt-4">
                <h3 className="font-semibold">
                  {lang === "tr" ? "Yasal Belgeler" : "Legal Documents"}
                </h3>
                <div className="flex flex-col gap-2 mt-2">
                  {legalApp.docs.map((doc) => (
                    <Link
                      key={doc}
                      className="text-primary hover:underline text-sm"
                      to={`/legal/${legalApp.slug}/${doc}`}
                    >
                      {legalDocLabels[doc][lang]}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default GameDetailPage;
