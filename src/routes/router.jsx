import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,

    children:[
        {
            path:" ",
            element:<Home></Home>,
        },
    ]
  },
  {
    path: "/auth",
    element: <div>Authentication Layout </div>,
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