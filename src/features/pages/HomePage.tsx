import { PageHero } from "../portfolio/PageHero"
import { AboutSectionContent } from "../portfolio/AboutSectionContent"
import { SplitTextSection } from "../portfolio/SplitTextSection"
import { OverlayImageGallery } from "../portfolio/OverlayImageGallery"
import { useTranslation } from "react-i18next"

export const HomePage = () => {
  const { t } = useTranslation()

  const galleryItems = [
    {
      imageSrc: "https://picsum.photos/id/1011/800/1000",
      imageAlt: "Editorial illustration with botanical details",
      text: t("gallery.item1"),
    },
    {
      imageSrc: "https://picsum.photos/id/1025/800/1000",
      imageAlt: "Portrait concept artwork",
      text: t("gallery.item2"),
    },
    {
      imageSrc: "https://picsum.photos/id/1005/800/1000",
      imageAlt: "Colorful mixed media composition",
      text: t("gallery.item3"),
    },
    {
      imageSrc: "https://picsum.photos/id/1041/800/1000",
      imageAlt: "Storytelling scene illustration",
      text: t("gallery.item4"),
    },
  ]

  return (
    <>
      <PageHero
        title={t("portfolio.title")}
        subtitle={t("portfolio.subtitle")}
        imageSrc="https://picsum.photos/id/1025/900/1100"
        imageAlt="Portfolio hero image"
      />
      <SplitTextSection
        sectionName={t("aboutSection.name")}
        title={t("aboutSection.title")}
      >
        <AboutSectionContent />
      </SplitTextSection>
      <OverlayImageGallery items={galleryItems} />
    </>
  )
}
