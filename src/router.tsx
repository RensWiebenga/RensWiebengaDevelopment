import { createBrowserRouter } from "react-router-dom";
import Index from "./routes/Index/Index";
import AppShell from "./components/AppShell";

const router = createBrowserRouter([
  {
    element: <AppShell />,
    children: [
      {
        path: "/",
        element: <Index />,
      },
    ],
  },
]);

export default router;
