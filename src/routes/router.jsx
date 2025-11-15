import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home';
import Category from '../pages/Category';
import Login from '../pages/Login';
import Register from '../pages/Register';
import AuthLayout from '../Layouts/AuthLayout';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children:[
        {
            path:"",
            element:<Home></Home>,
        },
        {
            path:"/category/:id",
            element:<Category></Category>,
            loader: () => fetch('/public/news.json'),
        },
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children:[
        {
            path:"/auth/login",
            element: <Login></Login>,
        },

        {
            path:"/auth/register",
            element:<Register></Register>
        }
    ]
  },
  {
    path: "/news",
    element: <div>News Layout</div>,
  },
  {
    path: "/*",
    element: <div>Error 404 !!!</div>,
  },
]);

export default router;