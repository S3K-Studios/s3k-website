import { TeamMember } from "../types/team-member";

export const teamMembers: TeamMember[] = [
  {
    id: "emir-kalafat",
    translations: [
      {
        language: "tr",
        name: "Ahmet Emir Kalafat",
        role: "Oyun Geliştirici",
        imageId: 1,
        specialAbility: "Gece 3'te Bug Ayıklama",
        favoriteGame: "Elden Ring",
        level: 99,
        class: "Baş Yazılımcı",
        themeColor: "blue",
        bio: "Yüksek performanslı oyun motorlarına ve karmaşık sistem mimarisine tutkuyla bağlı kıdemli geliştirici. İmkansız hataları dünya uyurken çözmesiyle tanınır.",
        experience: [
          { title: "Kıdemli Oyun Geliştirici", company: "S3K Studios", location: "İstanbul", period: "2021 - Günümüz", desc: "Çekirdek teknik ekibe liderlik etmek, özel motor özellikleri geliştirmek ve işleme hatlarını optimize etmek." },
          { title: "Kıdemli C++ Geliştirici", company: "TechNova Games", location: "İstanbul", period: "2018 - 2021", desc: "Platformlar arası oyun sistemleri geliştirildi ve fizik motoru entegrasyonunda uzmanlaşıldı." }
        ],
        skills: [
          { name: "C++ / C#", level: 98 },
          { name: "Unreal Engine", level: 95 },
          { name: "HLSL / Shaders", level: 90 },
          { name: "Sistem Tasarımı", level: 95 }
        ],
        education: [],
        projects: [],
        languages: [{ name: "Türkçe", level: "Anadil" }, { name: "İngilizce", level: "İleri" }],
        personal: { location: "İstanbul", birthDate: "1995-01-01", militaryStatus: "Yapıldı", drivingLicense: "B", email: "emir@s3k.com", phone: "+90 555 000 0000" },
        interests: ["Oyun Geliştirme", "Yapay Zeka", "Müzik"]
      },
      {
        language: "en",
        name: "Ahmet Emir Kalafat",
        role: "Game Developer",
        imageId: 1,
        specialAbility: "Bug Squashing at 3AM",
        favoriteGame: "Elden Ring",
        level: 99,
        class: "Lead Coder",
        themeColor: "blue",
        bio: "Senior developer with a passion for high-performance game engines and complex systems architecture. Known for solving impossible bugs while the world sleeps.",
        experience: [
          { title: "Lead Game Developer", company: "S3K Studios", location: "Istanbul", period: "2021 - Present", desc: "Leading the core technical team, developing custom engine features and optimizing rendering pipelines." },
          { title: "Senior C++ Developer", company: "TechNova Games", location: "Istanbul", period: "2018 - 2021", desc: "Developed cross-platform game systems and specialized in physics engine integration." }
        ],
        skills: [
          { name: "C++ / C#", level: 98 },
          { name: "Unreal Engine", level: 95 },
          { name: "HLSL / Shaders", level: 90 },
          { name: "System Design", level: 95 }
        ],
        education: [],
        projects: [],
        languages: [{ name: "Turkish", level: "Native" }, { name: "English", level: "Professional" }],
        personal: { location: "Istanbul", birthDate: "1995-01-01", militaryStatus: "Completed", drivingLicense: "B", email: "emir@s3k.com", phone: "+90 555 000 0000" },
        interests: ["Game Dev", "AI", "Music"]
      }
    ]
  },
  {
    id: "furkan-salihoglu",
    translations: [
      {
        language: "tr",
        name: "Furkan Selim Salihoğlu",
        role: "Bilgisayar Mühendisi",
        imageId: 2,
        specialAbility: "Sistem Mimarı",
        favoriteGame: "Satranç",
        level: 5,
        class: "Mimar",
        themeColor: "blue",
        bio: "Backend ve full-stack geliştirme konularında uzmanlaşmış Bilgisayar Mühendisi. Ölçeklenebilir finansal veri platformları, API entegrasyonları ve mimari, eşzamanlılık ve veri bütünlüğüne güçlü bir odaklanma ile veri odaklı sistemler oluşturma konusunda deneyimlidir.",
        education: [
          { degree: "Bilgisayar Mühendisliği Lisans", institution: "Fatih Sultan Mehmet Vakıf Üniversitesi", location: "İstanbul / Beyoğlu", period: "2019 - 2024" },
          { degree: "Lise Diploması", institution: "Kadıköy Anadolu İmam Hatip Lisesi", location: "İstanbul / Kadıköy", period: "2015 - 2019" }
        ],
        experience: [
          { title: "Bilgisayar Mühendisi", company: "Future Invest Teknoloji", location: "İstanbul / Sarıyer", period: "Ağu 2024 - Günümüz", desc: "Python (Django), PostgreSQL ve Refinitiv Eikon API kullanarak ölçeklenebilir finansal veri analiz platformu geliştiriliyor." },
          { title: "Stajyer", company: "OtoKiosk A.Ş.", location: "Gebze / Kocaeli", period: "Ağu 2023 - Eyl 2023", desc: "Showroom'lar için raporlama araçları geliştirildi." }
        ],
        projects: [
          { name: "Makine Öğrenmesi Tabanlı Yalan Dedektörü", desc: "Yüz ifadelerini analiz ederek yalan tespiti yapan sistem." }
        ],
        skills: [
          { name: "Python", level: 95 },
          { name: "Django / DRF", level: 90 },
          { name: "PostgreSQL", level: 90 },
          { name: "React", level: 75 }
        ],
        languages: [{ name: "İngilizce", level: "Profesyonel Çalışma Yetkinliği" }],
        personal: {
          location: "Esenyurt / İstanbul",
          birthDate: "2001-08-09",
          militaryStatus: "2027'ye kadar tecilli",
          drivingLicense: "B",
          email: "furkans.salihoglu@gmail.com",
          phone: "+90 533 768 1161"
        },
        interests: ["Kamp", "Müzik Dinlemek", "Bulmaca ve Mantık Oyunları"]
      },
      {
        language: "en",
        name: "Furkan Selim Salihoğlu",
        role: "Computer Engineer",
        imageId: 2,
        specialAbility: "System Architect",
        favoriteGame: "Chess",
        level: 5,
        class: "Architect",
        themeColor: "blue",
        bio: "Computer Engineer specialized in backend and full-stack development. Experienced in building scalable financial data platforms, API integrations, and data-driven systems with a strong focus on architecture, concurrency, and data integrity.",
        education: [
          { degree: "BSc in Computer Engineering", institution: "Fatih Sultan Mehmet Vakıf University", location: "Istanbul / Beyoglu", period: "2019 - 2024" },
          { degree: "High School Diploma", institution: "Kadikoy Anadolu Imam Hatip High School", location: "Istanbul / Kadikoy", period: "2015 - 2019" }
        ],
        experience: [
          { title: "Computer Engineer", company: "Future Invest Teknoloji", location: "Istanbul / Sariyer", period: "Aug 2024 - Present", desc: "Developing a scalable financial data analysis platform using Python (Django), PostgreSQL, and Refinitiv Eikon API." },
          { title: "Intern", company: "OtoKiosk A.Ş.", location: "Gebze / Kocaeli", period: "Aug 2023 - Sep 2023", desc: "Developed Python-based tools for reporting." }
        ],
        projects: [
          { name: "ML Based Lie Detector", desc: "Lie detector system using facial analysis." }
        ],
        skills: [
          { name: "Python", level: 95 },
          { name: "Django / DRF", level: 90 },
          { name: "PostgreSQL", level: 90 },
          { name: "React", level: 75 }
        ],
        languages: [{ name: "English", level: "Professional Working Proficiency" }],
        personal: {
          location: "Esenyurt / Istanbul",
          birthDate: "2001-08-09",
          militaryStatus: "Deferred until 2027",
          drivingLicense: "B",
          email: "furkans.salihoglu@gmail.com",
          phone: "+90 533 768 1161"
        },
        interests: ["Camping", "Listening to music", "Puzzle and logic games"]
      }
    ]
  },
  {
    id: "mikail-karatas",
    translations: [
      {
        language: "tr",
        name: "Mikail Karataş",
        role: "Proje Sahibi",
        imageId: 3,
        specialAbility: "Stratejik Planlama",
        favoriteGame: "Civilization VI",
        level: 90,
        class: "Komutan",
        themeColor: "green",
        bio: "Stüdyonun gemilerine rehberlik eden sabit el. Çevik proje yönetiminde uzmanlaşmış ve sanatsal vizyonun ticari başarı ile buluşmasını sağlıyor.",
        experience: [{ title: "Stüdyo Kurucusu & PM", company: "S3K Studios", location: "İstanbul", period: "2018 - Günümüz", desc: "Tüm stüdyo operasyonlarının ve stratejik ortaklıkların denetlenmesi." }],
        skills: [{ name: "Liderlik", level: 95 }, { name: "Finansal Planlama", level: 90 }],
        education: [],
        projects: [],
        languages: [{ name: "Türkçe", level: "Anadil" }],
        personal: { location: "İstanbul", birthDate: "1985-01-01", militaryStatus: "Muaf", drivingLicense: "B", email: "mikail@s3k.com", phone: "+90 555 111 2233" },
        interests: ["Strateji", "Tarih"]
      },
      {
        language: "en",
        name: "Mikail Karataş",
        role: "Project Owner",
        imageId: 3,
        specialAbility: "Strategic Planning",
        favoriteGame: "Civilization VI",
        level: 90,
        class: "Commander",
        themeColor: "green",
        bio: "The steady hand that guides the studio's ships. Specializing in agile project management and ensuring artistic vision meets commercial success.",
        experience: [{ title: "Studio Founder & PM", company: "S3K Studios", location: "Istanbul", period: "2018 - Present", desc: "Overseeing all studio operations, financial planning, and strategic partnerships." }],
        skills: [{ name: "Leadership", level: 95 }, { name: "Financial Planning", level: 90 }],
        education: [],
        projects: [],
        languages: [{ name: "English", level: "Professional" }],
        personal: { location: "Istanbul", birthDate: "1985-01-01", militaryStatus: "Exempt", drivingLicense: "B", email: "mikail@s3k.com", phone: "+90 555 111 2233" },
        interests: ["Strategy", "History"]
      }
    ]
  }
];

