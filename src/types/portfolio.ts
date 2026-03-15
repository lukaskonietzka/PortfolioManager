export interface Profile {
    title: string;
    name: string;
    image: string;
    intro: string;
}

export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    description: string;
    image: string;
    technologies: string[];
    github?: string;
    demo?: string;
    pdf?: string;
}

export interface Theme {
    primaryColor: string;
    backgroundColor: string;
    cardColor: string;
    cardBorder: boolean;
    cardBorderColor: string;
}

export interface PortfolioConfig {
    profile: Profile;
    theme: Theme;
    projects: Project[];
}