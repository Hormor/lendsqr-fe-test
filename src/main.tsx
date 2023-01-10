import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/Login';
import DashboardNavbar from './components/dashboard/DashboardNavbar';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  // {
  //   path: "/dashboard",
  //   element: <Dashboard />,
  // },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div className="main">
    <RouterProvider router={router} />
    <App />
  </div>
)
