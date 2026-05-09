import type { CMSPortfolioData } from "./types";

/**
 * Mock portfolio data - Replace with actual CMS API call
 * This demonstrates the structure that will come from CMS
 */
export const getMockPortfolioData = (): CMSPortfolioData => {
  return {
    hero: {
      bannerImage: {
        url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
        alt: "Illustration art portfolio banner",
        title: "Portfolio Banner",
      },
      title: "Welcome to My Portfolio",
      subtitle: "Bringing stories to life through illustration",
    },
    items: [
      {
        id: "1",
        title: "Character Design",
        description: "Creative character illustrations",
        image: {
          url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
          alt: "Character design illustration",
        },
        category: "character",
      },
      {
        id: "2",
        title: "Landscape Art",
        description: "Beautiful digital landscapes",
        image: {
          url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop",
          alt: "Landscape illustration",
        },
        category: "landscape",
      },
    ],
    footer: {
      copyright: "© 2026 Illustrator Portfolio. All rights reserved.",
      links: [
        { label: "About", url: "#about" },
        { label: "Contact", url: "#contact" },
        { label: "Instagram", url: "https://instagram.com" },
        { label: "Twitter", url: "https://twitter.com" },
      ],
    },
  };
};

/**
 * Future API function template for CMS integration
 * Replace this with actual API call to your CMS
 */
export const fetchPortfolioDataFromCMS =
  async (): Promise<CMSPortfolioData> => {
    // const response = await fetch('/api/portfolio');
    // return response.json();
    return getMockPortfolioData();
  };

/**
 * Get a placeholder image URL
 * Useful for development before CMS images are ready
 */
export const getPlaceholderImage = (width: number, height: number): string => {
  return `https://via.placeholder.com/${width}x${height}?text=Portfolio+Image`;
};
