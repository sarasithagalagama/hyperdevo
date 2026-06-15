export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  features: string[];
  href: string;
  cta: string;
}

export interface PortfolioProject {
  title: string;
  category: "Website" | "Web Development" | "Social Media" | "Digital Marketing" | "Branding" | "Web Apps";
  challenge: string;
  solution: string;
  services: string[];
  href: string;
}

export interface PackagePlan {
  name: string;
  bestFor: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface BlogPost {
  title: string;
  category: string;
  excerpt: string;
  readTime: string;
  date: string;
}
