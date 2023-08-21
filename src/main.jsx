import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorElement from './components/ErrorElement/ErrorElement';
import About from './components/About/About';

const router = createBrowserRouter([
    {
      path:"/",
      element:<h1>Welcome To React Router World</h1>,
      errorElement:<ErrorElement></ErrorElement>,
      
    },
    {
      path:"/about",
      element:<About />
    }
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
