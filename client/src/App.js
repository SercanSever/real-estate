import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout, RequireAuth } from "./pages/layout/layout";
import HomePage from "./pages/home-page/home-page";
import ListPage from "./pages/list-page/list-page";
import Login from "./pages/login/login";
import SinglePage from "./pages/single-page/single-page";
import ProfilePage from "./pages/profilePage/profilePage";
import Register from "./pages/register/register";
import ProfileUpdatePage from "./pages/profile-update-page/profile-update-page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/profile-update",
          element: <ProfileUpdatePage />,
        },
      ],
    },
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element: <ProfilePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
