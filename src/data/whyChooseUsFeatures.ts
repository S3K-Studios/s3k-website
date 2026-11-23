export interface WhyChooseUsFeature {
  icon: string;
  titleKey: string;
  descKey: string;
}

export const whyChooseUsFeatures: WhyChooseUsFeature[] = [
  {
    icon: "lucide:wand-2",
    titleKey: "landing.innovativeGameplay",
    descKey: "landing.innovativeGameplayDesc",
  },
  {
    icon: "lucide:heart",
    titleKey: "landing.passionateTeam",
    descKey: "landing.passionateTeamDesc",
  },
  {
    icon: "lucide:smartphone",
    titleKey: "landing.crossPlatform",
    descKey: "landing.crossPlatformDesc",
  },
];
