import React from 'react'
import Image from 'next/image'
import image1 from '../../../public/images/image1.png'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row gap-12'>
      <div className='flex-1 flex justify-center flex-col gap-8 font-bold items-center md:items-start'>
        <h1 className='text-[40px] uppercase leading-tight tracking-wide md:pl-[171px] text-center md:text-start pt-16 font-serif'>
          IMPECCABLE <br />
          CRAFTMANSHIP AND <br />
          FINESE
        </h1>
        <p className='text-[30px] leading-relaxed px-8 font-light md:pl-[171px] text-center md:text-start text-[#787054] font-serif'>
          An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
        </p>
        <button className='bg-[#A29875] text-white p-[10px] md:ml-[171px] rounded-[10px] gap-[10px] w-[288px] h-[56px] text-xl hover:scale-110 transition-transform'>
          Explore Now
        </button>
      </div>

      {/* Using Next.js Image component with direct public path */}
      <div className="flex-1 flex relative justify-center items-center m-8">
        <div className='relative w-[490px] h-[667px]'>
          <Image 
            src={image1}
            alt="Slider Image"
            fill
            priority
            className='object-cover rounded-tl-[150px] rounded-br-[150px] z-0'
          />
          <div className='absolute inset-0 border-[1px] border-white rounded-tl-[150px] rounded-br-[150px] w-[440px] h-[617px] mt-6 ml-6'></div>
        </div>
      </div>
    </div>
  )
}

export default Hero