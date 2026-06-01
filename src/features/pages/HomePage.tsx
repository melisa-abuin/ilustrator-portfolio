import { PageHero } from "../home/PageHero"
import { AboutSectionContent } from "../shared/AboutSectionContent"
import { SplitTextSection } from "../shared/SplitTextSection"
import { OverlayImageGallery } from "../home/OverlayImageGallery"
import { ContactCta } from "../shared/ContactCta"
import { useTranslation } from "react-i18next"

export const HomePage = () => {
  const { t } = useTranslation()

  const galleryItems = [
    {
      publicId: "editorial_crdbvi",
      imageAlt: "Editorial illustration with botanical details",
      text: t("gallery.item1"),
    },
    {
      publicId: "eventi_c4jsl3",
      imageAlt: "Portrait concept artwork",
      text: t("gallery.item2"),
    },
    {
      publicId: "marca_zxpz35",
      imageAlt: "Colorful mixed media composition",
      text: t("gallery.item3"),
    },
    {
      publicId: "stampe_obifx1",
      imageAlt: "Storytelling scene illustration",
      text: t("gallery.item4"),
    },
  ]

  return (
    <>
      <PageHero
        title={t("portfolio.title")}
        subtitle={t("portfolio.subtitle")}
        cloudinaryPublicId="banner_b1lh0r"
        imageAlt="Portfolio hero image"
      />
      <SplitTextSection
        sectionName={t("aboutSection.name")}
        title={t("aboutSection.title")}
      >
        <AboutSectionContent listLabelKey="aboutSection.listLabel" />
      </SplitTextSection>
      <OverlayImageGallery items={galleryItems} />
      <SplitTextSection
        sectionName={t("home.extraSection1.name")}
        title={t("home.extraSection1.title")}
      >
        <p>{t("home.extraSection1.body")}</p>
      </SplitTextSection>
      <SplitTextSection
        sectionName={t("home.extraSection2.name")}
        title={t("home.extraSection2.title")}
      >
        <AboutSectionContent
          bodyKey="home.extraSection2.body"
          pointKeys={[
            "home.extraSection2.point1",
            "home.extraSection2.point2",
            "home.extraSection2.point3",
            "home.extraSection2.point4",
          ]}
        />
      </SplitTextSection>
      <ContactCta />
    </>
  )
}
