"use client";

import React from "react";
import { data } from "./data";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface Shoe{
  id:number,
  shoe:any,
}
interface Props {
  href?: string;
  shoe: Shoe[],
  className?:string,
}
const Shoe = ({ href,shoe, className }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className={className}>
      {shoe.map((product) => (
        <div key={product.id} className="smallshoe relative gap-1 rounded-lg"  id={`slide${product.id}`} >
          <a
            href={`#slide${product.id}`} 
            className="smallshoe"
          >
            <Image
              src={product.shoe}
              alt="shoe"
              width={90}
              height={90}
              className="smallshoe flex rounded-lg ms-3"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Shoe;
