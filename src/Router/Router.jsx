import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import Login from "../Pages/login/Login";
import Register from "../Pages/Register/Register";
import AddCraft from "../Pages/AddCraft/AddCraft";
import AllData from "../Pages/AllData/AllData";
import MyList from "../Pages/MyList/MyList";
import PrivateRoute from "../Private/Private";
import Update from "../Pages/Update/Update";
import Error from "../Pages/Error/Error";
import Details from "../Pages/Details/Details";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/addcraft',
            element: <PrivateRoute><AddCraft></AddCraft></PrivateRoute>
        },
        {
            path:'/details/:id',
            element: <PrivateRoute><Details></Details></PrivateRoute>,
            loader:({params})=>fetch(`https://assainment-10-server-gamma.vercel.app/products/${params.id}`)
        },
        {
            path:'/list',
            element:<PrivateRoute> <MyList></MyList></PrivateRoute>
        },
        {
            path:'/update/:id',
            element:<PrivateRoute> <Update></Update></PrivateRoute>,
            loader:({params})=>fetch(`https://assainment-10-server-gamma.vercel.app/products/${params.id}`)
        },
        {
            path:'/allart&carft',
            element: <AllData></AllData>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        {
            path:'*',
            element: <Error></Error>
        }
      ]
    },
    
  ]);