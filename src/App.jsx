// import react components
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import page components
import Home from "./components/Home";
import Projects from "./components/Projects";
import ErrorPage from "./components/ErrorPage";

// css
import "./App.css";

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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
