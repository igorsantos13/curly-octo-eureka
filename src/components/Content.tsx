import React from 'react'

type Props = {}

export default function Content({}: Props) {
  return (
    <div className='flex flex-col justify-center w-1/2 px-12 py-8'>
      <h2 className='text-3xl font-bold text-white'>THAT'S WHAT <br /> <span className='text-[#e51e2a] text-8xl font-bold'>I LIKE</span></h2>
      <p className='text-sm text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores autem eaque voluptas accusamus, illum, quisquam distinctio adipisci iusto earum corrupti soluta tenetur voluptatibus aperiam saepe vitae architecto eligendi repellendus delectus?</p>
      <a href="#" className='bg-[#e51e2a] text-white p-2 w-48 font-medium rounded-full'>VIEW ALL PRODUCTS</a>
    </div>
  )
}