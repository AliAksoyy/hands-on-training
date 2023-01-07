import React from 'react'
import { useAuthContext } from '../context/ProviderAuth'

const Main = () => {
const {user}=useAuthContext()
console.log(user)
  return (
    <div>Main</div>
  )
}

export default Main