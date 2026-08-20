import { useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { GameTranslation } from "../types/game";
import { collections } from "../services/firebaseService";
import { useData } from "../context/DataContext";

export const useGames = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || "tr";
  const {
    games: rawGames,
    loading: dataLoading,
    error: dataError,
    refreshData,
  } = useData();

  useEffect(() => {
    if (rawGames.length === 0 && !dataLoading[collections.GAMES]) {
      refreshData(collections.GAMES);
    }
  }, [rawGames.length, dataLoading, refreshData]);

  const localizedGames = useMemo(() => {
    return rawGames
      .filter((g: any) => g.active !== false)
      .map((g: any) => {
        const trans =
          g.translations?.find((t: any) => t.language === currentLang) ||
          g.translations?.find((t: any) => t.language === "tr") ||
          g.translations?.[0] ||
          {};

        return { id: g.id, legalSlug: g.legalSlug, ...trans };
      });
  }, [rawGames, currentLang]);

  return {
    games: localizedGames as (GameTranslation & {
      id: string;
      legalSlug?: string;
    })[],
    loading: dataLoading[collections.GAMES] ?? true,
    error: dataError[collections.GAMES],
  };
};
