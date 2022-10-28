import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

export const PrivateRouter = () => {
  const useAuthentic =true
  return (
    <div>

    {useAuthentic ? <Outlet /> : <Navigate to="/register" /> }

    </div>
  )
}

