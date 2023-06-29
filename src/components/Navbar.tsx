import React from 'react'
import Image from 'next/image'
import logo from '../img/logo.png'


type Props = {}

export default function Navbar({}: Props) {
  return (
    <nav className='flex flex-row items-center justify-between w-screen px-12 py-8 text-white'>
      <a href="#"><Image src={logo} alt='logo' width={150} height={150}/></a>

      <ul className='flex flex-row justify-between w-1/3 '>
        <li><a href="#">Home</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">Newslatter</a></li>
        <li><a href="#">Contact</a></li>

      </ul>
    </nav>
  )
}