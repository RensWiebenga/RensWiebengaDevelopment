import { Group, Stack, Text } from "@mantine/core";
import classes from "./AboutMeBlock.module.css";

export default function AboutMeBlock() {
  return (
    <Stack gap="40px">
      <Group
        justify="center"
        gap="40px"
        grow
        wrap="nowrap"
        align="flex-start"
        className={classes.textWrapper}
      >
        <Text size="lg" className={classes.textBlock}>
          I am a driven software engineer, based in the Netherlands,
          specializing in front-end and back-end web development, DevOps, Azure
          Cloud, and software architecture. I thrive on solving complex
          challenges from start to finish by delivering effective, reliable
          solutions.
        </Text>
      </Group>
      <Group
        justify="center"
        gap="40px"
        grow
        wrap="nowrap"
        align="flex-start"
        className={classes.textWrapper}
      >
        <Text size="lg" className={classes.textBlock}>
          Beyond my passion for development, I am an avid auto-didact,
          constantly seeking new skills and technologies to improve myself. I
          believe in continuous growth in my professional life and personal
          pursuits.
        </Text>

        <Text size="lg" className={classes.textBlock}>
          When I'm not coding, you’ll likely find me bouldering, exploring the
          outdoors, playing video games, or traveling. I'm always looking for
          new challenges to gain more "experience points."
        </Text>
      </Group>
    </Stack>
  );
}
