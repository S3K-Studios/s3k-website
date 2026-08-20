import { BlogPost } from "../types/blog";

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    translations: [
      {
        language: "tr",
        title: "Oyun Geliştirmede Yeni Trendler",
        author: "Jane Doe",
        date: "2025-07-01",
        readingTime: "4 dk",
        isFeatured: false,
        content: [
          {
            type: "paragraph",
            text: "Oyun geliştirme dünyasında son yıllarda ortaya çıkan yeni trendler ve teknolojiler...",
          },
          {
            type: "image",
            src: "https://img.heroui.chat/image/game?w=600&h=340&u=1",
            alt: "Yeni trendler",
          },
          {
            type: "code",
            code: "function helloWorld() {\n  console.log('Hello, world!');\n}",
            language: "javascript",
          },
          {
            type: "paragraph",
            text: "Bu trendler arasında yapay zeka, bulut tabanlı oyunlar ve daha fazlası yer alıyor.",
          },
        ],
      },
      {
        language: "en",
        title: "New Trends in Game Development",
        author: "Jane Doe",
        date: "2025-07-01",
        readingTime: "4 min",
        isFeatured: false,
        content: [
          {
            type: "paragraph",
            text: "New trends and technologies emerging in the world of game development in recent years...",
          },
          {
            type: "image",
            src: "https://img.heroui.chat/image/game?w=600&h=340&u=1",
            alt: "New trends",
          },
          {
            type: "code",
            code: "function helloWorld() {\n  console.log('Hello, world!');\n}",
            language: "javascript",
          },
          {
            type: "paragraph",
            text: "These trends include AI, cloud-based games, and more.",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    translations: [
      {
        language: "tr",
        title: "Unity mi Unreal mı?",
        author: "John Smith",
        date: "2025-06-20",
        readingTime: "3 dk",
        isFeatured: true,
        content: [
          {
            type: "paragraph",
            text: "Unity ve Unreal Engine karşılaştırması, avantajları ve dezavantajları...",
          },
          {
            type: "image",
            src: "https://img.heroui.chat/image/game?w=600&h=340&u=2",
            alt: "Unity vs Unreal",
          },
          {
            type: "code",
            code: 'public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}',
            language: "java",
          },
          {
            type: "paragraph",
            text: "Her iki motorun da güçlü ve zayıf yönleri var.",
          },
        ],
      },
      {
        language: "en",
        title: "Unity or Unreal?",
        author: "John Smith",
        date: "2025-06-20",
        readingTime: "3 min",
        isFeatured: true,
        content: [
          {
            type: "paragraph",
            text: "Unity and Unreal Engine comparison, advantages and disadvantages...",
          },
          {
            type: "image",
            src: "https://img.heroui.chat/image/game?w=600&h=340&u=2",
            alt: "Unity vs Unreal",
          },
          {
            type: "code",
            code: 'public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}',
            language: "java",
          },
          {
            type: "paragraph",
            text: "Both engines have their strengths and weaknesses.",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    translations: [
      {
        language: "tr",
        title: "Indie S3K Stüdyosu Kurmak",
        author: "Emily Brown",
        date: "2025-06-10",
        readingTime: "5 dk",
        isFeatured: true,
        content: [
          {
            type: "paragraph",
            text: "Kendi indie S3K stüdyonuzu kurmak için ipuçları ve püf noktaları...",
          },
          {
            type: "image",
            src: "https://img.heroui.chat/image/game?w=600&h=340&u=3",
            alt: "Indie Stüdyo",
          },
          {
            type: "paragraph",
            text: "Ekip kurma, finansman ve pazarlama stratejileri tartışılıyor.",
          },
        ],
      },
      {
        language: "en",
        title: "Starting an Indie S3K Studios",
        author: "Emily Brown",
        date: "2025-06-10",
        readingTime: "5 min",
        isFeatured: true,
        content: [
          {
            type: "paragraph",
            text: "Tips and tricks for starting your own indie S3K Studios...",
          },
          {
            type: "image",
            src: "https://img.heroui.chat/image/game?w=600&h=340&u=3",
            alt: "Indie Studio",
          },
          {
            type: "paragraph",
            text: "Team building, funding, and marketing strategies are discussed.",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    translations: [
      {
        language: "tr",
        title: "Mobil Oyunlarda Monetizasyon",
        author: "Jane Doe",
        date: "2025-05-28",
        readingTime: "2 dk",
        isFeatured: false,
        content: [
          {
            type: "paragraph",
            text: "Mobil oyunlarda gelir elde etmenin yolları ve en iyi uygulamalar...",
          },
          {
            type: "image",
            src: "https://img.heroui.chat/image/game?w=600&h=340&u=4",
            alt: "Monetizasyon",
          },
          {
            type: "paragraph",
            text: "Reklamlar, uygulama içi satın alımlar ve abonelikler gibi yöntemler.",
          },
        ],
      },
      {
        language: "en",
        title: "Monetization in Mobile Games",
        author: "Jane Doe",
        date: "2025-05-28",
        readingTime: "2 min",
        isFeatured: false,
        content: [
          {
            type: "paragraph",
            text: "Ways to generate revenue in mobile games and best practices...",
          },
          {
            type: "image",
            src: "https://img.heroui.chat/image/game?w=600&h=340&u=4",
            alt: "Monetization",
          },
          {
            type: "paragraph",
            text: "Methods such as ads, in-app purchases and subscriptions.",
          },
        ],
      },
    ],
  },
  {
    id: "5",
    translations: [
      {
        language: "en",
        title: "Using AI in Games",
        author: "John Smith",
        date: "2025-05-15",
        readingTime: "6 min",
        isFeatured: false,
        content: [
          {
            type: "paragraph",
            text: "How AI is used in games and its future potential...",
          },
          {
            type: "image",
            src: "https://img.heroui.chat/image/game?w=600&h=340&u=5",
            alt: "AI",
          },
          {
            type: "code",
            code: "def hello_world():\n    print('Hello, world!')",
            language: "python",
          },
          {
            type: "paragraph",
            text: "Smarter and more dynamic game experiences are possible with AI.",
          },
        ],
      },
      {
        language: "tr",
        title: "Oyunlarda Yapay Zeka Kullanımı",
        author: "John Smith",
        date: "2025-05-15",
        readingTime: "6 dk",
        isFeatured: false,
        content: [
          {
            type: "paragraph",
            text: "Yapay zekanın oyunlarda nasıl kullanıldığı ve gelecekteki potansiyeli...",
          },
          {
            type: "image",
            src: "https://img.heroui.chat/image/game?w=600&h=340&u=5",
            alt: "Yapay Zeka",
          },
          {
            type: "code",
            code: "def hello_world():\n    print('Hello, world!')",
            language: "python",
          },
          {
            type: "paragraph",
            text: "AI ile daha akıllı ve dinamik oyun deneyimleri mümkün.",
          },
        ],
      },
    ],
  },
];
