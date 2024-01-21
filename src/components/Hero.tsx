import React from 'react'

const Hero = () => {
  return (
    <section className='padding-container flex flex-col gap-20 py-10 pb-40 md:gap-28 lg:py-20 xl:flex-row bg-cover'
   style={{
    backgroundImage: `url('/hero_bg.jpg')`,
     height: "600px",
    }}>

        
        <div className='relative z-20 flex flex-1 flex-col xl:w-12'>
            <div className='w-2/3 p-5 bg-gray-100 text-slate-50 rounded-lg bg-opacity-50'><h1 className='bold-32 lg:bold-64'>Your step into <span className='text-teal-20'>pain free</span> lifestyle and fun</h1></div>
          
        </div>
    </section>
  )
}

export default Hero