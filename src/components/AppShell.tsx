import { AppShell as Shell, useMantineColorScheme } from "@mantine/core";
import { useThemeSwitcher } from "../theme";
import { Outlet } from "react-router-dom";
import { HeaderSimple } from "../routes/Index/components/HeaderSimple/HeaderSimple";

export default function AppShell() {
  const { setTheme, theme } = useThemeSwitcher();
  const { setColorScheme } = useMantineColorScheme();

  const handleThemeChange = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setColorScheme(newTheme);
    setTheme(newTheme);
  };

  return (
    <Shell>
      <HeaderSimple onThemeChange={handleThemeChange} theme={theme} />
      <Outlet />
    </Shell>
  );
}
