import { Group, Text } from "@mantine/core";
import classes from "./AboutMeBlock.module.css";

export default function AboutMeBlock() {
  return (
    <Group
      justify="center"
      gap="60px"
      grow
      wrap="nowrap"
      align="flex-start"
      className={classes.textWrapper}
    >
      <Text size="lg" className={classes.textBlock}>
        I am a software engineer with a passion for web development. I have
        experience in both front-end and back-end technologies, and I am always
        eager to learn new things.
      </Text>

      <Text size="lg" className={classes.textBlock}>
        I enjoy climbing, particularly bouldering, playing video games, being
        outdoors, and traveling to explore new places. I am dedicated to gaining
        experience points.
      </Text>
    </Group>
  );
}
