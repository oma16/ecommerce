/* eslint-disable react/jsx-no-undef */
import React, { useContext, useState } from "react";
import "./cartModal.css";
import { cartContext } from "@/context/context";
import Image from "next/image";
import del from "../../../public/assets/icon-delete.svg";


const CartModal = () => {
  const { shoe,cartItems,setCartItems,setShoe,shoeState, setShoeState } = useContext(cartContext);
  
 const handleRemoveCart = () => {
  setCartItems("");
  setShoe(0)
  setShoeState(0)
  };
  
  return (
    <div className="cartCard p-3">
      <h2 className="borderNav cartTitle">Cart</h2>
      <div className="p-2">
        <div className="empty">
          {shoe !== 0 && cartItems !== "" ? (
            <div className="cardmodal modalfont">
              <div className="flex justify-between mt-3 ">
                <div>
                  
                    {cartItems.product.shoesmall.slice(0,1).map((single:any)=>
                     <div key={single.id}>
                      <Image
                    src={single.shoe}
                    alt="shoe"
                    height={50}
                    width={50}
                    className="rounded-lg"
                    
                  />
                     </div>
                    )}
                    
                </div>
                <div>
                  <h1>Fall Limited Edition Sneakers</h1>
                  <p>
                    ${cartItems.product.price}.00 
                    <span  className="ms-2 ">x</span>
                     <span className="ms-2 ">{shoe}</span>{" "}
                    <span className="text-black font-black text-xl">
                      ${cartItems.product.price * shoe}.00
                    </span>
                  </p>
                </div>

                <div className="remove">
                  <Image src={del} alt="remove" onClick={handleRemoveCart}/>
                </div>
              </div>
              <button className="bg-brand flex justify-center w-full rounded-lg checkout">
                Checkout
              </button>
            </div>
          ) : (
            <div className="empty cartBody">Your cart is empty.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartModal;
