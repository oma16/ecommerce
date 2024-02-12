"use client"
import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { data } from '@/component/data';

export const cartContext = createContext();

const Contexts = ({children}) => {
    const [shoe, setShoe] = useState(0);
    const [cartItems, setCartItems] = useState("");
    const [shoeState, setShoeState] = useState(0);
  return (
    <cartContext.Provider value={{shoe,setShoe,cartItems, setCartItems,shoeState, setShoeState}}>
      {children}
    </cartContext.Provider>
  )
}

export default Contexts