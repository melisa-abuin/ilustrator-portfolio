/**
 * Language utilities for i18n operations
 */

export const SUPPORTED_LANGUAGES = ["en", "it"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

/**
 * Get the opposite language
 * Used for toggle functionality
 */
export const toggleLanguage = (currentLang: string): SupportedLanguage => {
  return currentLang === "en" ? "it" : "en";
};

/**
 * Check if a language is supported
 */
export const isSupportedLanguage = (
  lang: string,
): lang is SupportedLanguage => {
  return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage);
};

/**
 * Get language display name
 */
export const getLanguageDisplayName = (lang: SupportedLanguage): string => {
  const names: Record<SupportedLanguage, string> = {
    en: "English",
    it: "Italiano",
  };
  return names[lang];
};
