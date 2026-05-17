import { SplitTextSection } from "../portfolio/SplitTextSection"

export const AboutMePage = () => {
  return (
    <SplitTextSection
      sectionName="About me"
      title="Illustration with intention"
    >
      <p>
        I create images that balance narrative, texture, and color. This slot is
        passed in as children, so you can place any content here.
      </p>
    </SplitTextSection>
  )
}
