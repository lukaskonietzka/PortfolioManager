export interface Profile {
    title: string;
    name: string;
    image: string;
    intro: string;
}

export interface Repository {
    label: string;
    url: string;
}

export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    description?: string[];
    image: string;
    technologies: string[];
    repositories?: Repository[];
}

export interface Theme {
    primaryColor?: string;
    backgroundColor?: string;
    cardColor?: string;
    cardBorder?: boolean;
    cardBorderColor?: string;
    accent?: string;
    accentSoft?: string;
    pageBackground?: string;
    surface?: string;
    surfaceStrong?: string;
    text?: string;
    mutedText?: string;
    border?: string;
    cardRadius?: number;
    shadow?: string;
}

export interface PortfolioConfig {
    profile: Profile;
    theme: Theme;
    projects: Project[];
}
