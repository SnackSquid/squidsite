import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";

export default function Router() {
  // routes
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "projects",
      element: <Projects />,
      errorElement: <ErrorPage />,
      children: [{ path: "" }],
    },
  ]);
  return <RouterProvider router={router} />;
}
