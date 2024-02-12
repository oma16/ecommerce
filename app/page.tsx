"use client";
import React, { useState } from "react";
import Image from "next/image";
// import './globals.css'
import { data } from "../component/data";
import Shoe from "../component/Shoe";
import ButtonAdd from "../component/ui/button/";
import next from "../public/assets/icon-next.svg";
import previous from "../public/assets/icon-previous.svg";
import Modalpage from "@/component/ui/modal/Modalpage";
import "@/component/ui/modal/modalpage.css";
import Link from "next/link";

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const handleModalClick = () => {
    setIsOpenModal(!isOpenModal);
  };
  const handleModalClose = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <main className="relative z-0 container flex min-h-screen flex-col items-center mx-auto sm: justify-between md:px-6 md:py-10 lg:px-8 lg:py-12 xl:px-16 xl:py-16 ">
      {/* <CarouselDisplay> */}
      {isOpenModal ? <Modalpage handleModalClose={handleModalClose} /> : ""}
      {data.map((shoeProduct) => (
        <div
          key={shoeProduct.id}
          className=" grid w-full grid-cols-1 md:grid-cols-2 justify-between align-middle mx-auto"
        >
          <div className="w-full ">
            <div className="carousels w-full ">
              {shoeProduct.shoebig.map((product) => (
                <div
                  id={`slide${product.id}`}
                  className="carousel-items  relative w-full"
                  key={product.id}
                  // "
                >
                  <div className="w-full lg:w-4/5">
                    <Image
                      src={product.shoe}
                      alt="shoe"
                      className="w-full md:rounded-xl mb-7"
                      height={80}
                      onClick={handleModalClick}
                      id={`slide${product.id}`}
                    />

                    <div className="absolute flex md:hidden  justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <Link
                        href={
                          product.id <= 1
                            ? `#slide${product.id}`
                            : `#slide${product.id - 1}`
                        }
                        className="btn btn-circle bg-white py-2 px-3 rounded-full"
                      >
                        {/* ❮ */}
                        <Image src={previous} alt="previous" />
                      </Link>
                      <Link
                        href={
                          product.id >= 4
                            ? `#slide${product.id}`
                            : `#slide${product.id + 1}`
                        }
                        className="btn btn-circle bg-white py-2 px-3 rounded-full"
                      >
                        {/* ❯ */}
                        <Image src={next} alt="next" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Shoe shoe={shoeProduct.shoesmall} className="shoeflex  items-center justify-center md:w-full" />
          </div>
          <div className="lg:w-4/5  md:mt-8 xl:mt-24   px-8 md:px-5 xl:px-10">
            <h3 className="font-bold text-orange-50 text-base uppercase  mb-3">
              Sneaker Company
            </h3>
            <h1 className="text-black font-bold text-3xl lg:text-4xl mb-7">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-base font-Kumbh font-normal text-blue-200">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="flex md:flex-col justify-between mt-3 mb-6 md:mb-3">
              <p className="text-black font-bold  text-2xl  lg:mt-5">
                ${shoeProduct.price * 0.5}.00{" "}
                <span className="text-orange-50 ms-2 text-base py-1 px-2  bg-orange-100 rounded-lg">
                  50%
                </span>
              </p>
              <p className="text-lg text-blue-200 line-through">
                ${shoeProduct.price}.00
              </p>
            </div>
            <ButtonAdd product={shoeProduct} />
          </div>
        </div>
      ))}
      {/* </CarouselDisplay> */}
    </main>
  );
}
