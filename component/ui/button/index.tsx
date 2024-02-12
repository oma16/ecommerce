"use client";
import React, { useContext, useState } from "react";
import ButtonUi from "../ButtonUi";
import Image from "next/image";
import minus from "../../../public/assets/icon-minus.svg";
import plus from "../../../public/assets/icon-plus.svg";
import cart from "../../../public/assets/icon-cartw.svg";
import "./button.css";
import { cartContext } from "@/context/context";
import { data } from "@/component/data";

interface Shoes {
  id: number;
  shoe?: HTMLImageElement;
  shoes1?: HTMLImageElement;
  price: number;
}
interface ShoeProduct {
  shoeProduct?: Shoes;
}

const ButtonAdd = (product :any) => {
  const { shoe, setShoe, shoeState, setShoeState, setCartItems,cartItems  } = useContext(cartContext);
  

  const addToCart = (product:ShoeProduct) => {
    
    setShoe(shoeState)
    setCartItems(product)
      console.log(cartItems)
   
  };

  const handleAdd = () => {
    const shoes = shoeState + 1;
    setShoeState(shoes);
  };

  const handleMinus = () => {
    const shoes = shoeState - 1;
    if (shoeState <= 0) {
      setShoeState(0);
    } else {
      setShoeState(shoes);
    }
  };
 
  return (
    <div className="btncol mb-10 ">
      <div className="py-2 bg-btn px-1 font-bold text-lg flex justify-between btnMargin items-center rounded-lg">
        <ButtonUi className=" btnpad" onClick={handleMinus}>
          <Image src={minus} alt="minus" />
        </ButtonUi>

        <span className="text-black font-bold text-2xl btnpad">
          {shoeState}
        </span>
        <ButtonUi className="btnpad" onClick={handleAdd}>
          <Image src={plus} alt="plus" />
        </ButtonUi>
      </div>

      <div className=" btnMargin btnmar">
        <ButtonUi
          className="  w-full bg-brand flex justify-between py-2  items-center rounded-lg "
          onClick={() => addToCart(product)}
        >
          <Image src={cart} alt="cart" className="text-white cart " />
          <span className="text-base pl-3 text-white ms-1">Add to cart </span>
        </ButtonUi>
      </div>
    </div>
  );
};

export default ButtonAdd;
