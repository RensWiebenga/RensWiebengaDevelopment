import { Group, Stack, Title } from "@mantine/core";
import {
  IconUserScan,
  IconSourceCode,
  IconWorldCode,
  IconMailBolt,
} from "@tabler/icons-react";
import classes from "./FancyTitle.module.css";

export function FancyTitle({ title, icon }: { title: string; icon: string }) {
  return (
    <Stack align="center" justify="center" gap="md">
      <Title order={1}>{title}</Title>
      <Group>
        <div className={classes.line} />
        {icon === "IconWorldCode" && (
          <IconWorldCode size={50} className={classes.icon} />
        )}

        {icon === "IconMailBolt" && (
          <IconMailBolt size={45} className={classes.icon} />
        )}
        {icon === "IconUserScan" && (
          <IconUserScan size={50} className={classes.icon} />
        )}
        {icon === "IconSourceCode" && (
          <IconSourceCode size={50} className={classes.icon} />
        )}
        <div className={classes.line} />
      </Group>
    </Stack>
  );
}

export default FancyTitle;
