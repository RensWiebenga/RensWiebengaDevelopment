import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import ThemeProvider from "./theme.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";
import "@mantine/carousel/styles.css";
import "@mantine/charts/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
