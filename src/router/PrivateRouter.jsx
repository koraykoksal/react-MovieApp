import React, { useContext } from 'react'
import { AutContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRouter = () => {

    const {currentUser} = useContext(AutContext)

  return (
    currentUser ? <Outlet/> : <Navigate to="/login"/>
  )
}
