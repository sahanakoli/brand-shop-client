import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './layer/Root';
import ErrorElement from './component/errorElement/ErrorElement';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import MyCart from './pages/MyCart';
import Login from './pages/Login';
import Product from './pages/Product';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children: [
    {
      path:'/',
      element:<Home></Home>
    },
    {
      path:'/addProduct',
      element:<AddProduct></AddProduct>
    },
    {
      path:'/myCart',
      element:<MyCart></MyCart>
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/product',
      element:<Product></Product>
    }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
