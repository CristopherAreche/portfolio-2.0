export interface Skill {
  id: number;
  name: string;
  image: string;
}

export interface Tool {
  id: number;
  name: string;
  image: string;
}

export interface Social {
  id: number;
  name: string;
  icon: React.ReactNode;
  url: string;
}

export interface TechItem {
  name: string;
  image: string;
}

export interface Project {
  id: number;
  name: string;
  image: string;
  frontend_tech: TechItem[];
  backend_tech?: TechItem[];
  description: string;
  deployment: string;
  sourceCode: string;
}

export interface ProjectItemProps {
  id: number;
  name: string;
  image: string;
  frontend_tech: TechItem[];
  backend_tech?: TechItem[];
  description: string;
  deployment: string;
  sourceCode: string;
}

export interface CustomLinkProps {
  deployment: string;
}
