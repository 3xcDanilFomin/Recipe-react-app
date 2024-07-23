import { createBrowserRouter } from "react-router-dom";

import { App } from "../App";
import { Layout } from "../components/Layout";
import { HomePage } from "../pages/HomePage";
import { SearchPage } from "../pages/SearchPage";
import { FavouritesPage } from "../pages/FavouritesPage";
import { ProfilePage } from "../pages/ProfilePage";
import { AuthPage } from "../pages/AuthPage";
import { RecipesPage } from "../pages/RecipesPage";
import { DetailRecipePage } from "../pages/DetailRecipePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <HomePage />,
          },
          {
            path: "/search",
            element: <SearchPage />,
          },
          {
            path: "/favourites",
            element: <FavouritesPage />,
          },
          {
            path: "/profile",
            element: <ProfilePage />,
          },
          {
            path: "/auth",
            element: <AuthPage />,
          },
          {
            path: "/recipes/:recipesName",
            element: <RecipesPage />,
          },
          {
            path: "/recipes/:recipesName/:id",
            element: <DetailRecipePage />,
          },
        ],
      },
    ],
  },
]);
