import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppLayout } from "./components/layout/AppLayout";

import {Home} from "../src/pages/Home"
import {About} from "../src/pages/About"
import {Contact} from "../src/pages/Contact"
import {Products} from "../src/pages/Products"
function App() {

  const router = createBrowserRouter([{
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "contact",
        element: <Contact />
      }
    ]
  
  }]);

  return (
    <>
     <RouterProvider router={router}> </RouterProvider>
    </>
  )
}

export default App
