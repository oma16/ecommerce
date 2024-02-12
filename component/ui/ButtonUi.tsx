'use client'
import React from 'react'

interface Props {
    children:React.ReactNode,
    className?:string,
    onClick?:React.MouseEventHandler<HTMLButtonElement>,
}

const ButtonUi = ({children,className,onClick}:Props) => {
  return (
    <button className={className} onClick={onClick}>{children}</button>
  )
}

export default ButtonUi