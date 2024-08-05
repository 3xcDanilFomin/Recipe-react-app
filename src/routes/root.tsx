import { createBrowserRouter } from "react-router-dom";

import { App } from "../App";
import { Layout } from "../components/Layout";
import {
  AuthPage,
  DetailRecipePage,
  FavouritesPage,
  FiltersPage,
  HomePage,
  ProfilePage,
  RecipesPage,
  SearchPage,
} from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { path: "/", element: <HomePage /> },
          { path: "/search", element: <SearchPage /> },
          { path: "/favourites", element: <FavouritesPage /> },
          { path: "/profile", element: <ProfilePage /> },
          { path: "/auth", element: <AuthPage /> },
          { path: "/search/recipes/:recipesName", element: <RecipesPage /> },
          { path: "/search/recipes/:recipesName/:id", element: <DetailRecipePage /> },
        ],
      },
      { path: "/filters", element: <FiltersPage /> },
    ],
  },
]);
