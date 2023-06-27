import React from 'react'
import Image from 'next/image'
import logo from '../img/logo.png'


type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className='flex flex-row items-center justify-between w-screen px-12 py-8 text-white'>
      <a href="#"><Image src={logo} alt='logo' width={150} height={150}/></a>

      <ul className='flex flex-row justify-between w-1/3 '>
        <li>Home</li>
        <li>Product</li>
        <li>Newslatter</li>
        <li>Conact</li>
      </ul>
    </nav>
  )
}