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
import NewBrand from './component/NewBrand';
import PrivateRoute from './routes/PrivateRoute';
import Details from './component/Details';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorElement></ErrorElement>,
    children: [
    {
      path:'/',
      element:<Home></Home>,
      loader: () => fetch('https://brand-shop-server-three.vercel.app/brand')
    },
    {
      path:'/addProduct',
      element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
    },
    {
      path:'/myCart',
      element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
      loader: () => fetch('https://brand-shop-server-three.vercel.app/cart')
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
      path: "/updateProduct/:id",
      element: <UpdateProduct />,
      loader: ({ params }) => fetch(`https://brand-shop-server-three.vercel.app/users/${params.id}`)
      
    },
    {
      path:'/details/:id',
      element:<PrivateRoute><Details></Details></PrivateRoute>,
      loader: ({params}) => fetch(`https://brand-shop-server-three.vercel.app/users/${params.id}`)
    },
    {
      path:'/brandProduct/:brandName',
      element:<BrandProduct></BrandProduct>,
      loader: ({params}) => fetch(`https://brand-shop-server-three.vercel.app/brandProduct/${params.brandName}`)
    },
    {
      path:'/newBrand',
      element:<NewBrand></NewBrand>
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
