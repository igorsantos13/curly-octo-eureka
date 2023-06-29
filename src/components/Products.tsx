"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import coke1 from '@/img/cocacola1.png'
import coke2 from '@/img/cocacola2.png'
import coke3 from '@/img/cocacola3.png'
import coke4 from '@/img/cocacola4.png'

type Props = {}

export default function Products({}: Props) {
  const [activeC1, setActiveC1] = useState(false)
  const [activeC2, setActiveC2] = useState(false)
  const [activeC3, setActiveC3] = useState(false)
  const [activeC4, setActiveC4] = useState(false)


  return (
    <div className='z-10 absolute right-0 bottom-[-50px] w-1/2 flex flex-row items-center justify-center overflow-hidden'>
      
        {activeC1 && <div className='absolute spin-blur-background h-[250px] left-[18%] top-[25%]'></div>}
        <Image src={coke1} alt='coke 1' width={150} className='rotate-[-15deg] hover:animate-rotate-bounce-c1' onMouseOver={()=> setActiveC1(true)} onMouseOut={()=>setActiveC1(false)}/>

        {activeC2 && <div className='absolute spin-blur-background-blue h-[250px] left-[40%]'></div>}
        <Image src={coke2} alt='coke 1' width={150} className='rotate-[5deg] hover:animate-rotate-bounce-c2' onMouseOver={()=>setActiveC2(true)} onMouseOut={()=>setActiveC2(false)}/>
        
        {activeC3 && <div className='absolute spin-blur-background-green h-[250px] left-[63%]' ></div>}
        <Image src={coke3} alt='coke 1' width={150} className='rotate-[15deg] hover:animate-rotate-bounce-c3' onMouseOver={()=> setActiveC3(true)} onMouseOut={()=> setActiveC3(false)}/>

        {activeC4 && <div className='absolute spin-blur-background-purple h-[250px] left-[80%]' ></div>}
        <Image src={coke4} alt='coke 1' width={150} className='rotate-[-15deg] hover:animate-rotate-bounce-c4' onMouseOver={()=>setActiveC4(true)} onMouseOut={()=>setActiveC4(false)}/>

    </div>
  )
}