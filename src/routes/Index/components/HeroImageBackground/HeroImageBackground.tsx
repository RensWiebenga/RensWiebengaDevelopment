import {
  Title,
  Text,
  Container,
  Overlay,
  Stack,
  Anchor,
  Button,
} from "@mantine/core";
import Avatar from "../Avatar/Avatar";
import classes from "./HeroImageBackground.module.css";
import { IconCoffee } from "@tabler/icons-react";

export function HeroImageBackground() {
  return (
    <div className={classes.wrapper} id="home">
      <Overlay color="#000" opacity={95} zIndex={1} />

      <div className={classes.inner}>
        <Stack justify="center">
          <Avatar />
          <Title className={classes.title}>
            Welcome to the portfolio of{" "}
            <Text component="span" inherit className={classes.highlight}>
              Rens Wiebenga
            </Text>
          </Title>

          <Container size={640}>
            <Text size="xl" className={classes.description} mb={10}>
              Full Stack Developer
            </Text>
            <Text size="lg" className={classes.slogan} fs="italic">
              “
              <Text
                component="span"
                inherit
                className={classes.highlight}
                fw={700}
              >
                Jack of all trades
              </Text>{" "}
              is a master of none,
              <br /> though oftentimes{" "}
              <Text
                component="span"
                inherit
                className={classes.highlight}
                fw={700}
              >
                better than master of one
              </Text>
              “
            </Text>
          </Container>
          <div className={classes.controls}>
            <Anchor size="lg" href="#contact" fw={700}>
              <Button
                rightSection={<IconCoffee size={25} />}
                className={classes.control}
              >
                {" "}
                Get in touch
              </Button>
            </Anchor>
          </div>
        </Stack>
      </div>
    </div>
  );
}
