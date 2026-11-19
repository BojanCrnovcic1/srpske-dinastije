import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import DynastiesPage from "../pages/DynastiesPage";
import DynastyPage from "../pages/DynastyPage";
import RulerPage from "../pages/RulerPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "dinastije",
        element: <DynastiesPage />,
      },
      {
        path: "dinastije/:slug",
        element: <DynastyPage />,
      },
      {
        path: "vladari/:slug",
        element: <RulerPage />,
      },
    ],
  },
]);
