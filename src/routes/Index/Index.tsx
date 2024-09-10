import { Container, Space } from "@mantine/core";
import FancyTitle from "./components/FancyTitle/FancyTitle";
import AboutMeBlock from "./components/AboutMeBlock/AboutMeBlock";
import { GetInTouch } from "./components/GetInTouch/GetInTouch";
import { HeroImageBackground } from "./components/HeroImageBackground/HeroImageBackground";
import { CardsCarousel } from "./components/CardsCarousel/CardsCarousel";
import { SkillsBlock } from "./components/SkillsBlock/SkillsBlock";

export default function Index() {
  return (
    <div>
      <HeroImageBackground />
      <Space h="xl" />
      <Container>
        <div id="about" className="section">
          <FancyTitle title="About" icon="IconUserScan" />
          <Space h="xl" />
          <AboutMeBlock />
          <Space h="xl" />
        </div>
        <div id="skills" className="section">
          <FancyTitle title="Skills" icon="IconWorldCode" />
          <Space h="xl" />
          <SkillsBlock />
          <Space h="xl" />
        </div>
        <div id="projects" className="section">
          <FancyTitle title="Projects" icon="IconSourceCode" />
          <Space h="xl" />
          <CardsCarousel />
          <Space h="xl" />
        </div>

        <div id="contact" className="section">
          <FancyTitle title="Contact me" icon="IconMailBolt" />
          <Space h="xl" />
          <GetInTouch />
        </div>
      </Container>
    </div>
  );
}
