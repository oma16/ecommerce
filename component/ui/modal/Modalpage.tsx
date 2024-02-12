'use client'
import React from "react";
import { data } from "../../../component/data";
import Image from "next/image";
import Shoe from "../../../component/Shoe";
import ButtonAdd from "../../../component/ui/button/index";
import next from "../../../public/assets/icon-next.svg";
import previous from "../../../public/assets/icon-previous.svg";
import close from "../../../public/assets/icon-closewhite.svg";

import "./modalpage.css";


const Modalpage = ({ id, handleModalClose }: any) => {
 
  
  return (
    <main className="modallink   mx-auto  items-center  justify-center p-10  ">
      <div className="close" onClick={handleModalClose}><Image src={close} alt="close" /></div>
      
      {data.map(product=>(
        <div key={product.id}>
        <div className="carousels mx-auto modalbigimg ">
          {product.shoebig.map((shoe) => (
            <div
              id={`slide${shoe.id}`}
              key={shoe.id}
              className="carousel-items flex justify-center  relative w-full"
            >
              <Image
                src={shoe.shoe}
                alt="team pic"
                width={100}
                height={100}
                className="rounded-lg ms-3 w-full "
              />
              {/* <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" /> */}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a
                  href={
                    shoe && shoe?.id <= 1
                      ? `#slide${shoe?.id}`
                      : `#slide${shoe.id - 1}`
                  }
                  className="btn btn-circle bg-white py-2 px-3 rounded-full z-10"
                >
                  {" "}
                  <Image src={previous} alt="previous" />
                </a>
                <a
                  href={
                    shoe && shoe?.id >= 4
                      ? `#slide${shoe.id}`
                      : `#slide${shoe.id + 1}`
                  }
                  className="btn btn-circle bg-white py-2 px-3 rounded-full"
                >
                  <Image src={next} alt="next" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <Shoe shoe={product.shoesmall} className=" shoesmall items-center justify-center md:w-full"/>
        <div className="flex modalab  ">
          {product.shoesmall.map((shoe) => (
            <div
              id={`slide${shoe.id}`}
              key={shoe.id}
              className="carousel-item relative"
            >
              <a href={`#slide${shoe.id}`} className=" py-2 px-3 rounded-full">
                {" "}
                <Image
                  src={shoe.shoe}
                  alt="team pic"
                  width={70}
                  height={70}
                  className="rounded-lg ms-3"
                />
              </a>
  
              {/* <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" /> */}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                
              </div>
            </div>
          ))}
        </div>
        </div>
      ))}

      
    </main>
  );
};

export default Modalpage;
