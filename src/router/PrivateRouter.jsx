import React, { useContext } from 'react'
import { AutContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

export const PrivateRouter = () => {

    const {currentuser} = useContext(AutContext)
    console.log(currentuser)

  return (

    //! replace işlemi login ekranında iken tarayıcı üzerinden geri butonuna basıldığında bir önceki sayfaya dönmeyi sağlar.
    currentuser ? <Outlet/> : <Navigate to="/login" replace/>
  )
}
