import { Container, Space } from "@mantine/core";
import { GridAsymmetrical } from "./components/GridAsymmetrical/GridAsymmetrical";
import { HeaderSimple } from "./components/HeaderSimple/HeaderSimple";
import FancyTitle from "./components/FancyTitle/FancyTitle";
import AboutMeBlock from "./components/AboutMeBlock/AboutMeBlock";
import { GetInTouch } from "./components/GetInTouch/GetInTouch";
import { HeroImageBackground } from "./components/HeroImageBackground/HeroImageBackground";

export default function Index() {
  return (
    <div>
      <HeaderSimple />
      <HeroImageBackground />
      <Space h="xl" />
      <Container>
        <FancyTitle title="Skills" icon="IconCode" />
        <Space h="xl" />
        <GridAsymmetrical />
        <Space h="xl" />
        <FancyTitle title="About" icon="IconBubble" />
        <Space h="xl" />
        <AboutMeBlock />
        <Space h="xl" />
        <FancyTitle title="Contact me" icon="IconMail" />
        <Space h="xl" />
        <GetInTouch />
      </Container>
    </div>
  );
}
