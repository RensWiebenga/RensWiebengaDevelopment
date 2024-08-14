import { Container } from "@mantine/core";
import { GridAsymmetrical } from "./components/GridAsymmetrical/GridAsymmetrical";
import { HeaderSimple } from "./components/HeaderSimple/HeaderSimple";
import { HeroContentLeft } from "./components/HeroContentLeft/HeroContentLeft";
import FancyTitle from "./components/FancyTitle/FancyTitle";
import AboutMeBlock from "./components/AboutMeBlock/AboutMeBlock";
import { GetInTouch } from "./components/GetInTouch/GetInTouch";
import { HeroImageBackground } from "./components/HeroImageBackground/HeroImageBackground";

export default function Index() {
  return (
    <div>
      <HeaderSimple />
      <HeroImageBackground />
      <Container>
        <FancyTitle title="Skills" icon="IconCode" />
        <GridAsymmetrical />
        <FancyTitle title="About" icon="IconBubble" />
        <AboutMeBlock />
        <FancyTitle title="Contact me" icon="IconMail" />
        <GetInTouch />
      </Container>
    </div>
  );
}
