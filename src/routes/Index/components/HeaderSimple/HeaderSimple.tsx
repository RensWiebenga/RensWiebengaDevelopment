import { Container, Group, Switch, Anchor } from "@mantine/core";
import classes from "./HeaderSimple.module.css";
import Logo from "../Logo/Logo";
import { ChangeEventHandler, useEffect, useState } from "react";

const links = [
  { link: "#home", label: "Home" },
  { link: "#skills", label: "Skills" },
  { link: "#projects", label: "Projects" },
  { link: "#about", label: "About" },
  { link: "#contact", label: "Contact" },
];

export function HeaderSimple({
  onThemeChange,
  theme,
}: {
  onThemeChange: ChangeEventHandler<HTMLInputElement>;
  theme: string;
}) {
  const [active, setActive] = useState(links[0].link);

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) => document.querySelector(link.link));
      const offset = 90; // Adjust based on your header height

      sections.forEach((section, index) => {
        if (section) {
          const top = section.getBoundingClientRect().top - offset;

          if (top <= 0 && top + section.clientHeight > 0) {
            setActive(links[index].link);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const items = links.map((link) => (
    <Anchor
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      underline="never"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Logo />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
        <Switch
          onChange={onThemeChange}
          color="cyan"
          checked={theme === "dark"}
        />

        {/* <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" /> */}
      </Container>
    </header>
  );
}
