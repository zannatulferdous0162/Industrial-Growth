import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ToastContainer } from 'react-toastify';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Router/Router.jsx';
import Provider from './AuthProbider/Provider.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider>
   <RouterProvider router={router} />
   </Provider>
   <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
