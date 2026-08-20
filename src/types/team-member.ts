export interface TeamMemberTranslation {
  language: string;
  name: string;
  role: string;
  imageId: number;
  specialAbility: string;
  favoriteGame: string;
  level: number;
  class: string;
  bio: string;
  themeColor: string;
  education: {
    degree: string;
    institution: string;
    location: string;
    period: string;
  }[];
  experience: {
    title: string;
    company: string;
    location: string;
    period: string;
    desc: string;
  }[];
  projects: {
    name: string;
    desc: string;
  }[];
  skills: {
    name: string;
    level: number; // 1-100
  }[];
  languages: {
    name: string;
    level: string;
  }[];
  personal: {
    location: string;
    birthDate: string;
    militaryStatus: string;
    drivingLicense: string;
    email: string;
    phone: string;
  };
  interests: string[];
}

export interface TeamMember {
  id: string;
  translations: TeamMemberTranslation[];
}