import React from 'react'
import './App.scss'
import Dashboard from './components/Dashboard'
import DashboardNavbar from './components/DashboardNavbar'
import DashboardSidebar from './components/DashboardSidebar'

function App() {
  return (
    <div>
      <DashboardNavbar />
      <div className="content">
        <DashboardSidebar />
        <Dashboard />
      </div>
    </div >
  )
}

export default App
