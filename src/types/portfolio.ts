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

export interface WorkExperience {
    period: string;
    position: string;
    company: string;
    description: string;
    highlights?: string[];
}

export interface ResearchEntry {
    title: string;
    period: string;
    context: string;
    description: string;
    links?: Repository[];
}

export interface EducationEntry {
    period: string;
    qualification: string;
    institution: string;
    description?: string;
}

export interface CvConfig {
    profile?: { summary: string; facts?: string[] };
    experience?: WorkExperience[];
    skills?: string[];
    projects?: string[];
    research?: ResearchEntry[];
    education?: EducationEntry[];
}

export interface Project {
    id: string;
    title: string;
    shortDescription: string;
    description?: string[];
    image?: string;
    technologies?: string[];
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
    butterscotch?: string;
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
    cv?: CvConfig;
}
