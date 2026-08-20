import { Game } from "../types/game";

export const games: Game[] = [
  {
    id: "1",
    translations: [
      {
        language: "tr",
        title: "Galactic Odyssey",
        description: "Uzayın derinliklerinde geçen, strateji ve keşif odaklı bir macera.",
        image: "https://img.heroui.chat/image/game?w=600&h=340&u=1",
        features: ["Çok oyunculu mod", "Gelişmiş uzay gemisi özelleştirme", "Etkileyici hikaye modu"],
        releaseDate: "2025-01-01",
        storeLinks: [{ name: "Steam", url: "#" }, { name: "Epic Games", url: "#" }]
      },
      {
        language: "en",
        title: "Galactic Odyssey",
        description: "A strategy and exploration focused adventure set in the depths of space.",
        image: "https://img.heroui.chat/image/game?w=600&h=340&u=1",
        features: ["Multiplayer mode", "Advanced spaceship customization", "Immersive story mode"],
        releaseDate: "2025-01-01",
        storeLinks: [{ name: "Steam", url: "#" }, { name: "Epic Games", url: "#" }]
      }
    ]
  },
  {
    id: "2",
    translations: [
      {
        language: "tr",
        title: "Mystic Valley",
        description: "Büyülü bir vadide geçen, bulmaca ve keşif dolu bir platform oyunu.",
        image: "https://img.heroui.chat/image/game?w=600&h=340&u=2",
        features: ["Zengin görsel tasarım", "Farklı karakter yetenekleri", "Sürükleyici bulmacalar"],
        releaseDate: "2025-02-15",
        storeLinks: [{ name: "Steam", url: "#" }]
      },
      {
        language: "en",
        title: "Mystic Valley",
        description: "A platform game full of puzzles and exploration set in a magical valley.",
        image: "https://img.heroui.chat/image/game?w=600&h=340&u=2",
        features: ["Rich visual design", "Different character abilities", "Immersive puzzles"],
        releaseDate: "2025-02-15",
        storeLinks: [{ name: "Steam", url: "#" }]
      }
    ]
  },
  {
    id: "3",
    translations: [
      {
        language: "tr",
        title: "Cyber Runner",
        description: "Geleceğin şehirlerinde geçen hızlı tempolu bir aksiyon koşu oyunu.",
        image: "https://img.heroui.chat/image/game?w=600&h=340&u=3",
        features: ["Refleks odaklı oynanış", "Farklı parkurlar ve engeller", "Kişiselleştirilebilir karakterler"],
        releaseDate: "2025-03-30",
        storeLinks: [{ name: "Epic Games", url: "#" }]
      },
      {
        language: "en",
        title: "Cyber Runner",
        description: "A fast-paced action runner set in the cities of the future.",
        image: "https://img.heroui.chat/image/game?w=600&h=340&u=3",
        features: ["Reflex-oriented gameplay", "Different tracks and obstacles", "Customizable characters"],
        releaseDate: "2025-03-30",
        storeLinks: [{ name: "Epic Games", url: "#" }]
      }
    ]
  },
];
