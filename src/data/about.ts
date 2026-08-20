export interface TimelineItem {
    year: string;
    titleKey: string;
    descKey: string;
    badgeKey: string;
}

export interface ValueItem {
    icon: string;
    titleKey: string;
    descKey: string;
    percentage: string;
    colorClass: string;
    iconBgClass: string;
}

export const timelineItems: TimelineItem[] = [
    // en üstte en eski olay, en altta en son olay olacak şekilde sırala
    {
        year: "2026",
        titleKey: "about.timeline1Title",
        descKey: "about.timeline1Desc",
        badgeKey: "about.timeline1Badge"
    }
];

export const valuesItems: ValueItem[] = [
    {
        icon: "material-symbols:rocket-launch",
        titleKey: "about.playerFirst",
        descKey: "about.playerFirstDesc",
        percentage: "95%",
        colorClass: "bg-blue-500",
        iconBgClass: "bg-blue-500/10 text-blue-500"
    },
    {
        icon: "material-symbols:groups",
        titleKey: "about.powerToPeople",
        descKey: "about.powerToPeopleDesc",
        percentage: "88%",
        colorClass: "bg-purple-500",
        iconBgClass: "bg-purple-500/10 text-purple-500"
    },
    {
        icon: "material-symbols:history",
        titleKey: "about.longevity",
        descKey: "about.longevityDesc",
        percentage: "100%",
        colorClass: "bg-green-500",
        iconBgClass: "bg-green-500/10 text-green-500"
    }
];
