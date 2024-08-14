import AppShell from "./components/AppShell";
import { createBrowserRouter } from "react-router-dom";
import Index from "./routes/Index/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
]);

export default router;
