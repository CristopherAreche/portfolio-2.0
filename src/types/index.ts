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

export interface ProjectTech {
  name: string;
  image: string;
}

export interface BackendTech {
  id?: number;
  name: string;
  image: string;
}

export interface Project {
  index: number;
  id: number;
  name: string;
  image: string;
  propertyUrl: string;
  frontend_tech: ProjectTech[];
  backend_tech?: BackendTech[];
  description: string;
  deployment: string;
  sourceCode: string;
}

export interface ProjectItemProps {
  index?: number;
  id: number;
  name: string;
  image: string;
  propertyUrl: string;
  frontend_tech: ProjectTech[];
  backend_tech?: BackendTech[];
  description: string;
  deployment: string;
  sourceCode: string;
}

export interface NavbarProps {
  project: boolean;
  setProject: (project: boolean) => void;
}

export interface CustomLinkProps {
  deployment: string;
}
