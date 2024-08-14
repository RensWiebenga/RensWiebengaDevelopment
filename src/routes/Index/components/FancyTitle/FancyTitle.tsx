import { Group, Stack, Title } from "@mantine/core";
import { IconBubble, IconCode, IconMail } from "@tabler/icons-react";
import classes from "./FancyTitle.module.css";

export function FancyTitle({ title, icon }: { title: string; icon: string }) {
  return (
    <Stack align="center" justify="center" gap="md">
      <Title order={1}>{title}</Title>
      <Group>
        <div className={classes.line} />
        {icon === "IconCode" && <IconCode size={40} className={classes.icon} />}
        {icon === "IconBubble" && (
          <IconBubble size={40} className={classes.icon} />
        )}
        {icon === "IconMail" && <IconMail size={40} className={classes.icon} />}
        <div className={classes.line} />
      </Group>
    </Stack>
  );
}

export default FancyTitle;
