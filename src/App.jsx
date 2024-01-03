// import react components
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import page components
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import ErrorPage from "./components/pages/ErrorPage";
import Router from "./components/Router";

// css
import "./App.css";

function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
