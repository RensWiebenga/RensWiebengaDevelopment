import { AppShell as Shell, Group, Switch, NavLink } from "@mantine/core";
import { useThemeSwitcher } from "../theme";
import { Link, Outlet } from "react-router-dom";
import { IconHome, IconVaccine, IconVaccineBottle } from "@tabler/icons-react";

export default function AppShell() {
  const { setTheme, theme } = useThemeSwitcher();

  return (
    <Shell>
      <Shell.Header bg={"primary"}>
        <Group h="100%" px="md" justify="space-between">
          {theme === "dark" ? (
            <img src="/logo-dark.svg" />
          ) : (
            <img src="/logo-light.svg" />
          )}

          <Switch
            onChange={() => setTheme(theme === "light" ? "dark" : "light")}
            color="white"
          />
        </Group>
      </Shell.Header>

      <Shell.Navbar p="md">
        <NavLink
          component={Link}
          to="/"
          label="Dashboard"
          leftSection={<IconHome />}
        />

        <NavLink
          component={Link}
          to="/vaccinate"
          label="Vaccineren"
          leftSection={<IconVaccine />}
        />
        <NavLink
          component={Link}
          to="/vaccin-overview"
          label="Vaccin Overview"
          leftSection={<IconVaccineBottle />}
        />
      </Shell.Navbar>

      <Shell.Main>
        <Outlet />
      </Shell.Main>
    </Shell>
  );
}
