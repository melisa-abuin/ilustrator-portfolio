/**
 * Type definitions for portfolio data structures
 * Prepare for future data source integration
 */

export interface Image {
  url: string;
  alt: string;
  title?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: Image;
  category?: string;
}

export interface PortfolioData {
  hero: {
    bannerImage: Image;
    title: string;
    subtitle: string;
  };
  items: PortfolioItem[];
  footer: {
    copyright: string;
    links: Array<{
      label: string;
      url: string;
    }>;
  };
}

export interface TranslatedContent {
  [key: string]: string;
}
