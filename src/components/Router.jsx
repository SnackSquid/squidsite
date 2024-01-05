import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";
import Article from "./Article";
import json from "./projects/projectList.json";

const projects = Object.values(json);

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
    },
    {
      path: "projects/:path",
      element: <Article projects={projects} />,
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
