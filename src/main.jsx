import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorElement from './components/ErrorElement/ErrorElement';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Friends from './components/Friends/Friends';
import FriendsDetails from './components/FriendsDetails/FriendsDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

// const router = createBrowserRouter([
//     {
//       path:"/",
//       element:<h1>Welcome To React Router World</h1>,
//       errorElement:<ErrorElement></ErrorElement>,
      
//     },
//     {
//       path:"/about",
//       element:<About />
//     }
// ]);

// Nested route and outlet

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home></Home>,
    errorElement:<ErrorElement></ErrorElement>,
    children:[
      {
        path:"/about",
        element:<About></About>,
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/friends",
        element:<Friends></Friends>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
      },
      {
        path:"/posts",
        element:<Posts></Posts>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
      },
      {
        path:"/posts/:postId",
        element:<PostDetails></PostDetails>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },

      {
        path:"/friends/:friendsId",
        element:<FriendsDetails></FriendsDetails>,
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.friendsId}`)
      },
      {
        path:"/services",
        element:<Services></Services>
      }
    ]
  }
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
