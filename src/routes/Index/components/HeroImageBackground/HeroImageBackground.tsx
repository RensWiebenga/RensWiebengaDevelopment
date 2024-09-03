import { Title, Text, Container, Button, Overlay, Stack } from "@mantine/core";
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
            <Text size="lg" className={classes.description}>
              Build more reliable software with AI companion. AI is also trained
              to detect lazy developers who do nothing and just complain on
              Twitter.
            </Text>
          </Container>
          <div className={classes.controls}>
            <Button className={classes.control} size="lg">
              Get in contact
            </Button>
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
