import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { CMSPortfolioData } from "./utils/types";
import { fetchPortfolioDataFromCMS } from "./utils/api";
import { Header } from "./features/header/Header";
import { Hero } from "./features/portfolio/Hero";
import { Footer } from "./features/footer/Footer";
import styles from "./App.module.css";

export const App: React.FC = () => {
  const { t } = useTranslation();
  const [portfolioData, setPortfolioData] = useState<CMSPortfolioData | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const data = await fetchPortfolioDataFromCMS();
        setPortfolioData(data);
        setError(null);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to load portfolio data",
        );
        console.error("Failed to load portfolio data:", err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return (
      <div className={styles.loadingContainer}>
        <Header />
        <div className={styles.loader}>Loading...</div>
      </div>
    );
  }

  if (error || !portfolioData) {
    return (
      <div className={styles.errorContainer}>
        <Header />
        <div className={styles.error}>
          {error || "Failed to load portfolio data"}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.main}>
        <Hero
          bannerImage={portfolioData.hero.bannerImage}
          title={t("portfolio.title")}
          subtitle={t("portfolio.subtitle")}
        />
      </main>
      <Footer links={portfolioData.footer.links} />
    </div>
  );
};
