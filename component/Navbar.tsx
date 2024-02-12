"use client";
import React, { useContext, useState } from "react";
import logo from "../public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import cart from "../public/assets/icon-cart.svg";
import avatar from "../public/assets/image-avatar.png";
import menu from "../public/assets/icon-menu.svg";
import close from "../public/assets/icon-close.svg";
import CartModal from "./ui/cart/CartModal";
import "./ui/button/button.css";
import { cartContext } from '../context/context'


const Navbar = () => {
  const[isOpen, setIsOpen] =  useState(false)
  const[isOpenModal, setIsOpenModal] =  useState(false)

  const {shoe, setShoe} = useContext(cartContext);
  
  
  const handleModalClick = () =>{
      setIsOpenModal(!isOpenModal)
  }
  const handleClick = () =>{
      setIsOpen(!isOpen)
  }
  return (
    
    <div className="flex navWidth mx-auto mt-48 justify-between items-center bg-red-800 borderNav ">
      <div className="navlink">
        <div className="logo">
          <Link href={"/"} className="">
            <Image
              src={logo}
              alt={logo}
              // layout="responsive"
            />
          </Link>
        </div>
        <div className="relative flex flex-col md:flex-row  mx-auto justify-between">
          <Image src={menu} alt="menu" className="flex md:hidden menu" onClick={handleClick}/>

         
          <div className={isOpen ? " navCard pl-5" : "navlinks"}>
          <Image src={close} alt="close" className="flex md:hidden navimg" onClick={handleClick}/>
          <div className="links mb-5">
            <Link href={"/"} className="linkmenu">
              Collections
            </Link>
          </div>
          <div className="links  mb-5">
            <Link href={"/"} className="text-blue-100 linkmenu">
              Men
            </Link>
          </div>
          <div className="links mb-5">
            <Link href={"/"} className="text-blue-100 linkmenu">Women</Link>
          </div>
          <div className="links  mb-5">
            <Link href={"/"} className="text-blue-100 linkmenu">About</Link>
          </div>

          <div className="links  mb-5">
            <Link href={"/"} className="text-blue-100 linkmenu font-extrabold">Contact</Link>
          </div>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly items-center">
       <div className="align-middle cartRelative">
       <div className={shoe === 0 ? "cartNostate" :"cartState"}>{shoe}</div>
       <Image src={cart} alt="cart" width={20}
              height={20} className="" onClick={handleModalClick}/>
            {isOpenModal ?  <CartModal />: ""}
       </div>
        <div className="link1">
          <Image
            src={avatar}
            alt="avatar"
            className=""
            width={30}
            height={30}
          />
        </div>
      </div>
    </div>
    

  );
};

export default Navbar;
