"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import coke1 from '@/img/cocacola1.png'
import coke2 from '@/img/cocacola2.png'
import coke3 from '@/img/cocacola3.png'
import coke4 from '@/img/cocacola4.png'

type Props = {}

export default function Products({}: Props) {
  const [active, setActive] = useState(false)
  const handleMouseOver = ()=> {
    setActive(true)

    
  }

  const handleMouseOut = ()=> {
    setActive(false)

  }
  return (
    <div className='z-10 absolute right-0 bottom-[-50px] w-1/2 flex flex-row items-center justify-center overflow-hidden'>
      
        {active && <div className='absolute spin-blur-background h-[250px] left-[18%] top-[25%]'></div>}
        <Image src={coke1} alt='coke 1' width={150} className='rotate-[-15deg]' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
        <Image src={coke2} alt='coke 1' width={150} className='rotate-[5deg] ' />
        <Image src={coke3} alt='coke 1' width={150} className='rotate-[15deg]'/>
        <Image src={coke4} alt='coke 1' width={150} className='rotate-[-15deg]'/>
    </div>
  )
}