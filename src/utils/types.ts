/**
 * Type definitions for CMS data structures
 * Prepare for future CMS integration
 */

export interface CMSImage {
  url: string;
  alt: string;
  title?: string;
}

export interface CMSPortfolioItem {
  id: string;
  title: string;
  description: string;
  image: CMSImage;
  category?: string;
}

export interface CMSPortfolioData {
  hero: {
    bannerImage: CMSImage;
    title: string;
    subtitle: string;
  };
  items: CMSPortfolioItem[];
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
