import { createBrowserRouter } from "react-router";
import AuthLayout from "../Layouts/AuthLayout";
import MainLayout from "../Layouts/MainLayout";
import Category from "../pages/Category";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NewsDetails from "../pages/NewsDetails";
import Register from "../pages/Register";
import PrivateRoute from "../Provider/PrivateRoute";
import Loading from "../pages/Loading";
import newsData from "../../public/news.json";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: () => newsData,
         hydrateFallbackElement:<Loading></Loading>
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },

      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => newsData,
    hydrateFallbackElement:<Loading></Loading>
  },
  {
    path: "/*",
    element: <div>Error 404 !!!</div>,
  },
]);

export default router;
