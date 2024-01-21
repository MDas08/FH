import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col bg-black bg-opacity-30 mt-16 items-center'>
      <Image src="/logo.svg" alt='logo' width={250} height={250} className='mt-10'/>
        <p className='text-slate-50 rounded-lg bold-16 lg:bold-32 text-center my-5'>© 2024 FixHealth Task| Developed by Diya Das</p>
          
    </div>
    
  )
}

export default Footer