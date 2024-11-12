import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/layout/layout";
import HomePage from "./pages/home-page/home-page";
import ListPage from "./pages/list-page/list-page";
import Login from "./pages/login/login";
import SinglePage from "./pages/single-page/single-page";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
