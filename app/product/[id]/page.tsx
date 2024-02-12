/* eslint-disable react/jsx-no-undef */
// 'use client'
// import React, { useState } from "react";
// import { data } from "../../../component/data";
// import Image from "next/image";
// import Shoe from "../../../component/Shoe";
// import ButtonAdd from "../../../component/ui/button/index";
// import next from "../../../public/assets/icon-next.svg";
// import previous from "../../../public/assets/icon-previous.svg";
// import Modalpage from "@/component/ui/modal/Modalpage";



// interface Props {
//   params: { id: string },
  
 
// }
// const ShoeDetailPage = ({ params: { id }}: Props) => {
  
//   const[isOpenModal, setIsOpenModal] =  useState(false)

 
  
//   const handleModalClick = () =>{
//       setIsOpenModal(!isOpenModal)
//   }
//   const shoeProduct = data.find((product) => parseInt(id) === product.id);

//   return (
//     <main className="relative z-0 container flex min-h-screen flex-col items-center  sm: justify-between md:p-10 lg:p-12  xl:p-16">
//       {isOpenModal ?  <Modalpage  />: ""}
//       <div className="flex flex-col md:flex-row md:w-full xl:w-4/5 mx-auto justify-between carousel-item relative w-full">
//         <div className="md:w-1/2">
//           <Image
//             src={shoeProduct && shoeProduct.shoe}
//             alt="shoe"
//             className="w-full md:rounded-xl mb-7"
//             height={100}
//             width={100}
//             onClick={handleModalClick}
//             />
            
//           <div className="absolute flex md:hidden justify-between transform -translate-y-1/2 left-5 right-5 top-1/4">
//             <a
//               href={
//                 shoeProduct && shoeProduct?.id <= 1
//                   ? `${shoeProduct?.id}`
//                   : `${shoeProduct && shoeProduct?.id - 1}`
//               }
//               className="btn btn-circle bg-white py-2 px-3 rounded-full"
//             >
              
//               <Image src={previous} alt="previous"/>
//             </a>
//             <a
//               href={
//                 shoeProduct && shoeProduct?.id >= data.length
//                   ? `${shoeProduct?.id}`
//                   : `${shoeProduct && shoeProduct?.id + 1}`
//               }
//               className="btn btn-circle bg-white py-2 px-3 rounded-full"
//             >
              
//               <Image src={next} alt="next"/>
//             </a>
//           </div>
//           <Shoe />
//         </div>

//         <div className="md:w-1/2 lg:ms-20 xl:ms-40 md:mt-8 xl:mt-12 px-4 bottomMargin  md:ps-8 md:px-0 lg:px-0">
//           <h3 className="font-bold text-orange-50 text-base uppercase  mb-3">
//             Sneaker Company
//           </h3>
//           <h1 className="text-black font-bold text-3xl lg:text-4xl mb-5">
//             Fall Limited Edition Sneakers{" "}
//           </h1>
//           <p className="text-base text-blue-200">
//             These low-profile sneakers are your perfect casual wear companion.
//             Featuring a durable rubber outer sole, they’ll withstand everything
//             the weather can offer.
//           </p>
//           <div className="flex md:flex-col justify-between mt-3">
//             <p className="text-black font-bold text-2xl  lg:mt-5">
//               ${shoeProduct && shoeProduct.price * 0.5}.00
//               <span className="text-orange-50 ms-2 text-base py-1 px-2  bg-orange-100 rounded-lg">
//                 50%
//               </span>
//             </p>
//             <p className="text-lg text-blue-200 line-through ">
//               ${shoeProduct?.price}.00
//             </p>
//           </div>
//           <ButtonAdd product={shoeProduct}/>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default ShoeDetailPage;
