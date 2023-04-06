import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from '../containers/auth/register'
import Login from '../containers/auth/login'
import ForgotPassword from '../containers/auth/forgotPassword'
import Dashboard from '../containers/dashboard/dashboard'

const RoutesHandler = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/forgotPassword' element={<ForgotPassword />} />
        </Routes>
    </div>
  )
}

export default RoutesHandler