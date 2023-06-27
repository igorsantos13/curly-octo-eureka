import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Content from '@/components/Content'
import Circle from '@/components/Circle'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen '>
      <h1 className='text-white '>SOON! =)</h1>

      <h2>COKE</h2>
    <div className=' blur-sm'>
      <Navbar />
      <Content />
      <Circle />
    </div>

    </div>

     
    
  )
}
