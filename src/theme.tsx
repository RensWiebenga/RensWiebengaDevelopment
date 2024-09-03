import {
  createTheme,
  Button,
  Loader,
  Popover,
  LoadingOverlay,
  Modal,
  colorsTuple,
  Card,
  InputWrapper,
  AppShell,
  Switch,
  CSSVariablesResolver,
  mergeThemeOverrides,
  MantineProvider,
} from "@mantine/core";

import { useLocalStorage } from "@mantine/hooks";
import { PropsWithChildren, createContext, useContext } from "react";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/tiptap/styles.css";

const defaultTheme = createTheme({
  headings: {
    sizes: {
      h1: {
        fontSize: "48px",
        lineHeight: "54px",
        fontWeight: "400",
      },
      h2: {
        fontSize: "24px",
        lineHeight: "33px",
        fontWeight: "400",
      },
      h3: {
        fontSize: "22px",
        lineHeight: "28px",
        fontWeight: "600",
      },
      h4: {
        fontSize: "20px",
        lineHeight: "24px",
        fontWeight: "700",
      },
      h5: {
        fontSize: "17px",
        lineHeight: "27px",
        fontWeight: "700",
      },
    },
  },
  fontSizes: {
    xs: "12px",
    sm: "15px",
    md: "17px",
    lg: "20px",
    xl: "30px",
    xxl: "48px",
  },
  lineHeights: {
    xs: "20px",
    sm: "24px",
    md: "27px",
    lg: "34px",
    xl: "40px",
    xxl: "54px",
  },
  primaryColor: "link",
  colors: {
    primary: colorsTuple("#1191fa"),
    corporate: colorsTuple("#1961AB"),
    link: colorsTuple("#1A21D5"),
    txt: colorsTuple("#001021"),
    white: colorsTuple("#FFFFFF"),
    secondary: colorsTuple("#fc6039"),
    black: colorsTuple("#001021"),
    background: colorsTuple("#fff"),
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        radius: "xl",
        size: "md",
        autoContrast: true,
        loaderProps: { type: "dots" },
      },
    }),

    Loader: Loader.extend({
      defaultProps: {
        size: "xs",
      },
    }),
    Card: Card.extend({
      defaultProps: {
        shadow: "sm",
        padding: "lg",
        withBorder: true,
        radius: "lg",
      },
    }),
    Popover: Popover.extend({
      defaultProps: {
        shadow: "sm",
        width: 300,
        withArrow: true,
      },
    }),
    LoadingOverlay: LoadingOverlay.extend({
      defaultProps: {
        overlayProps: {
          blur: 8,
        },
        loaderProps: {
          size: "md",
        },
      },
    }),
    InputWrapper: InputWrapper.extend({
      defaultProps: {
        mt: "xs",
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        centered: true,
        closeButtonProps: {
          size: "xl",
        },
      },
    }),
    AppShell: AppShell.extend({
      defaultProps: {
        navbar: {
          width: 250,
          breakpoint: "sm",
        },

        footer: {
          height: 80,
        },

        padding: "md",
      },
    }),

    Switch: Switch.extend({
      styles: (currentTheme) => ({
        track: {
          backgroundColor: currentTheme.colors.background[1],
          height: 24,
          width: 50,
        },
        thumb: {
          backgroundColor: currentTheme.colors.primary[0], // Dynamically set the thumb color based on the primary color
          border: "none",
        },
      }),
    }),
  },
});

const resolveDefaultVariables: CSSVariablesResolver = (currentTheme) => ({
  dark: {},
  light: {},
  variables: {
    "--input-bd": currentTheme.colors.black[0],
    "--input-asterisk-color": currentTheme.colors.link[0],
  },
});

const darkTheme = mergeThemeOverrides(
  defaultTheme,
  createTheme({
    colors: {
      primary: colorsTuple("#1281c7"),
      background: colorsTuple("#fff"),
    },
  })
);

const lightTheme = mergeThemeOverrides(
  defaultTheme,
  createTheme({
    colors: {
      primary: colorsTuple("#0c67a1"),
      background: colorsTuple("#242424"),
    },
  })
);

const themes = {
  dark: [darkTheme, resolveDefaultVariables],
  light: [lightTheme, resolveDefaultVariables],
} satisfies Record<
  string,
  [ReturnType<typeof createTheme>, CSSVariablesResolver]
>;

const ThemeSwitcherContext = createContext<{
  setTheme: (theme: keyof typeof themes) => void;
  theme: keyof typeof themes;
}>({
  setTheme: (_theme: keyof typeof themes) => {},
  theme: "dark",
});

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeSwitcher = () => useContext(ThemeSwitcherContext);

export default function ThemeProvider({
  children,
  defaultTheme,
}: PropsWithChildren<{
  defaultTheme: keyof typeof themes;
}>) {
  const [currentThemeName, setCurrentThemeName] = useLocalStorage<
    keyof typeof themes
  >({
    key: "theme",
    defaultValue: defaultTheme,
  });
  const [currentTheme, currentVariables] = themes[currentThemeName];

  const handleThemeSwitch = (theme: keyof typeof themes) => {
    setCurrentThemeName(theme);
  };

  return (
    <MantineProvider
      theme={currentTheme}
      defaultColorScheme={currentThemeName}
      cssVariablesResolver={currentVariables}
    >
      <ThemeSwitcherContext.Provider
        value={{
          setTheme: handleThemeSwitch,
          theme: currentThemeName,
        }}
      >
        {children}
      </ThemeSwitcherContext.Provider>
    </MantineProvider>
  );
}
