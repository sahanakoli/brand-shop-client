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
import UpdateProduct from './pages/UpdateProduct';
import AuthProvider from './provider/AuthProvider';
import Registration from './sheard/Registration';
import BrandProduct from './pages/BrandProduct';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children: [
    {
      path:'/',
      element:<Home></Home>,
      loader: () => fetch('http://localhost:5000/brand')
    },
    {
      path:'/addProduct',
      element:<AddProduct></AddProduct>
    },
    {
      path:'/myCart',
      element:<MyCart></MyCart>,
      loader: () => fetch('http://localhost:5000/product')
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/registration',
      element:<Registration></Registration>
    },
    {
      path:'/product',
      element:<Product></Product>
    },
    {
      path:'/updateProduct/:id',
      element:<UpdateProduct></UpdateProduct>
    },
    {
      path:'/brandProduct',
      element:<BrandProduct></BrandProduct>
    }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
