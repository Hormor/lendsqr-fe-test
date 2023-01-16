import React from "react";
import { Outlet } from "react-router-dom";
import "./App.scss";
import DashboardNavbar from "./components/DashboardNavbar";
import DashboardSidebar from "./components/DashboardSidebar";

function App() {
  return (
    <div>
      <DashboardNavbar />
      <div className='content'>
        <DashboardSidebar />
        <div className='outlet'>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
