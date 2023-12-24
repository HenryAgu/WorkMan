import React from 'react'
import { Outlet } from 'react-router-dom'

const AdminDashboardLayout = () => {
  return (
    <div className='admin-dashboard-layout'>
      <div className="side-bar">
        
      </div>
      <h1>Aya</h1>
      <Outlet/>
    </div>
  )
}

export default AdminDashboardLayout