export type SectionId =
  | 'about'
  | 'academic'
  | 'experience'
  | 'skills'
  | 'projects'
  | 'links'
  | 'languages'
  | 'tools'
  | 'achievements'
  | 'hobby'
  | 'lets-connect'
  | 'goals';

export interface NavItem {
  id: SectionId;
  label: string;
  shortDesc: string;
  iconName: string;
  row: 1 | 2;
}

export interface ProfileInfo {
  name: string;
  title: string;
  avatar?: string;
  status: string;
  phone: string;
  email: string;
  location: string;
  timezone: string;
  bio: string;
  summary: string;
  metrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  socials: {
    platform: string;
    url: string;
    username: string;
    icon: string;
  }[];
}

export interface AcademicItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  location: string;
  description: string;
  highlights: string[];
  keyCourses: string[];
  researchTopic?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyType: string;
  period: string;
  location: string;
  isCurrent?: boolean;
  summary: string;
  achievements: string[];
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface SkillItem {
  name: string;
  level: number; // 1-100
  years: number;
  highlight: string;
  category: 'ai-ml' | 'engineering' | 'architecture' | 'leadership';
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullOverview: string;
  architectureDetails: string[];
  tags: string[];
  category: 'Autonomous Agents' | 'Edge AI & CV' | 'Multimodal AI' | 'Enterprise Systems';
  stars?: string;
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  status: 'Production' | 'Live Beta' | 'Open Source' | 'Research';
}

export interface LinkItem {
  id: string;
  title: string;
  category: string;
  url: string;
  description: string;
  badge?: string;
  icon: string;
}

export interface LanguageItem {
  name: string;
  type: 'programming' | 'spoken';
  proficiency: string;
  levelPercentage: number;
  context: string;
  favoriteFrameworks?: string[];
}

export interface ToolItem {
  name: string;
  category: 'AI & ML Frameworks' | 'Cloud & Distributed' | 'Development & DevSecOps' | 'Edge & Embedded';
  experience: string;
  useCase: string;
  icon?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  date: string;
  category: 'Hackathon' | 'Research' | 'Venture' | 'Open Source';
  description: string;
  metric?: string;
  badge: string;
}

export interface HobbyItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  highlights: string[];
}

export interface GoalItem {
  id: string;
  period: 'Q1-Q2 2026' | 'Q3-Q4 2026' | '2027 Vision';
  title: string;
  category: 'AI Tech' | 'Venture' | 'Open Source' | 'Personal';
  description: string;
  status: 'In Progress' | 'Planned' | 'Milestone';
  targetMetrics: string;
  progressPercentage: number;
}
