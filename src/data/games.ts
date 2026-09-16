import { Game } from "../types/game";

export const games: Game[] = [
  {
    id: "splitomic",
    legalSlug: "splitomic",
    translations: [
      {
        language: "tr",
        title: "Splitomic",
        description:
          "Zincirleme patlamalarla dolu, hızlı tempolu bir bulmaca-aksiyon oyunu.",
        image: "https://img.heroui.chat/image/game?w=600&h=340&u=splitomic",
        features: [
          "Zincirleme patlama mekaniği",
          "Çok oyunculu mod",
          "Skor tabloları",
        ],
        releaseDate: "2026-05-01",
        storeLinks: [
          { name: "App Store", url: "#" },
          { name: "Google Play", url: "#" },
        ],
      },
      {
        language: "en",
        title: "Splitomic",
        description:
          "A fast-paced puzzle-action game built around chain-reaction explosions.",
        image: "https://img.heroui.chat/image/game?w=600&h=340&u=splitomic",
        features: [
          "Chain-reaction explosion mechanics",
          "Multiplayer mode",
          "Leaderboards",
        ],
        releaseDate: "2026-05-01",
        storeLinks: [
          { name: "App Store", url: "#" },
          { name: "Google Play", url: "#" },
        ],
      },
    ],
  },
  {
    id: "777-pinball",
    translations: [
      {
        language: "tr",
        title: "777 Pinball",
        description:
          "Klasik langırt hissini modern mekaniklerle buluşturan, jackpot temalı bir pinball deneyimi.",
        image: "https://img.heroui.chat/image/game?w=600&h=340&u=777-pinbal",
        features: [
          "Klasik pinball fiziği",
          "Jackpot bonus turları",
          "Skor tabloları",
        ],
        releaseDate: "2026-06-01",
        storeLinks: [
          { name: "App Store", url: "#" },
          { name: "Google Play", url: "#" },
        ],
      },
      {
        language: "en",
        title: "777 Pinball",
        description:
          "A jackpot-themed pinball experience blending classic table feel with modern mechanics.",
        image: "https://img.heroui.chat/image/game?w=600&h=340&u=777-pinbal",
        features: [
          "Classic pinball physics",
          "Jackpot bonus rounds",
          "Leaderboards",
        ],
        releaseDate: "2026-06-01",
        storeLinks: [
          { name: "App Store", url: "#" },
          { name: "Google Play", url: "#" },
        ],
      },
    ],
  },
];
