import { Title, Text, Container, Overlay, Stack, Anchor } from "@mantine/core";
import Avatar from "../Avatar/Avatar";
import classes from "./HeroImageBackground.module.css";

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
            <Text size="xl" className={classes.description}>
              Senior Full Stack Developer
            </Text>
            <Text size="lg" className={classes.description} fs="italic">
              “Jack of all trades master of none, though oftentimes better than
              master of one.”
            </Text>
          </Container>
          <div className={classes.controls}>
            <Anchor className={classes.control} size="lg" href="#contact">
              Get in touch
            </Anchor>
            {/* <Button
              className={cx(classes.control, classes.secondaryControl)}
              size="lg"
            >
              Live demo
            </Button> */}
          </div>
        </Stack>
      </div>
    </div>
  );
}
