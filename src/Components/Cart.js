import React from 'react'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import Fooditems from './Foodotems'

const Cart = () => {
  const cartItems = useSelector((store)=>store.cart.item)
  return (
    <Fooditems {...cartItems[0]} />
  )
}

export default Cart