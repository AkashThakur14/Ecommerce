import React from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AppLayout } from "./components/layout/AppLayout";

import {Home} from "../src/pages/Home"
import {About} from "../src/pages/About"
import {Contact} from "../src/pages/Contact"
import {Products} from "../src/pages/Products"
import { SingleProduct } from './pages/SingleProduct';
import { Cart } from './pages/Cart';
import { ErrorPage } from './pages/ErrorPage';
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
        path: "/singleproduct/:id",
        element: <SingleProduct />
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "*",
        element: <ErrorPage />
      },
    ]
  
  }]);

  return (
    <>
     <RouterProvider router={router}> </RouterProvider>
    </>
  )
}

export default App
