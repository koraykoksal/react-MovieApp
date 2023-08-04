import React, { useContext } from 'react'
import { AutContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRouter = () => {

    const {currentuser} = useContext(AutContext)
    console.log(currentuser)

  return (
    currentuser ? <Outlet/> : <Navigate to="/login" replace/>
  )
}
