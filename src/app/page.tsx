import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Content from '@/components/Content'
import Circle from '@/components/Circle'
import Socials from '@/components/Socials'
import Products from '@/components/Products'

export default function Home() {
  return (
          
    <>
      <Navbar />
      <Content />
      <Socials />
      <Products />
      <Circle />
    </>



     
    
  )
}
