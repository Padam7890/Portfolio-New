export interface menuItem {
    name: string;
    url: string;
  }
  
export type menuList = menuItem[];
  
export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export interface DefaultLayoutProps {
  children: React.ReactNode;
  seoProps?: {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
  };
}
export interface expertiseLogoProps {
  logo: string;
  alt: string;
  title: string;
  
}