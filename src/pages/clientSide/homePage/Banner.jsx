
import { useState } from 'react'
import { FaQuoteLeft } from 'react-icons/fa'
import { GoArrowUpRight } from 'react-icons/go'
import ReactStars from 'react-stars'

const Banner = () => {
  const [valueChage, setValueChange]= useState(true)

  const handleIconEnter = () =>{
    setValueChange(false)

  }
  const handleIconLeave = () =>{
    setValueChange(true)

  }
  return (
    <div className='container mx-auto '>

      {/* text area  */}
      <div className='flex flex-col justify-center mt-20 items-center '>
        <div className="relative w-20">
          <p className='border border-black  py-2.5 px-5 mb-2 rounded-2xl'>Hello!</p>
          <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725679411/React%20class/Portfolio%20Project/so0ncjl2y6almdqzdq8r.png" alt="" className='w-5 absolute -top-5 -right-3' />
        </div>
        <div className="relative -z-10">
          <p className='lg:text-7xl md:text-5xl text-4xl text-center font-semibold'>I&apos;m <span className='text-theme_orange'>₭𝒂ყ𝔲𝙢</span>, <br /> Web designer</p>
          <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725679411/React%20class/Portfolio%20Project/so0ncjl2y6almdqzdq8r.png" alt="" className='w-12 rotate-180 absolute -bottom-8 -left-7' />
        </div>
      </div>

      {/* image area  */}

      <div className="flex flex-col lg:flex-row gap-4 -mt-16 z-20 px-5 lg:px-0">
        <div className=" lg:w-1/3 mt-28 text-center lg:text-start">
          <FaQuoteLeft className='text-2xl mx-auto lg:mx-0' />
          <p className='text-xl font-bold leading-7 mt-5'>Kayum Exceptional Web design ensure our website’s success.Highly Recommended</p>
        </div>
        <div className="relative">
          <div className=' rounded-t-full z-20 '>
            <img src="https://res.cloudinary.com/dnvmj9pvk/image/upload/v1725680880/React%20class/Portfolio%20Project/ykujytgmukgflzwrtj36.png" alt="" className='a' />
          </div>
          <div className='bg-[#FEB273] z-10 h-60 lg:h-72 top-0 right-0 lg:-mt-72 -mt-60 w-11/12 mx-auto rounded-t-full'></div>

          <div className='bg-white btn btn-glass  px-6 absolute lg:bottom-10 bottom-7 lg:left-40 md:left-36 left-9 inline-block h-20 rounded-[60px]'>
             <div className='flex  gap-3 opacity-[100%] my-3 '>
             <button onMouseEnter={handleIconEnter} onMouseLeave={handleIconLeave} className='bg-[#FD853A] lg:px-5 px-3 py-2.5
              rounded-[60px] text-xl lg:text-2xl flex items-center gap-2 text-white '>Portfolio <GoArrowUpRight   className={`${valueChage ? '' : 'hidden'}`}  /></button>
             <button className='bg-[#FD853A] px-5 py-2.5
              rounded-[60px] text-xl lg:text-2xl flex items-center gap-2 text-white '>Hire me <GoArrowUpRight /></button>
             </div>
          </div>

        </div>
        <div className="lg:w-1/3 flex  lg:justify-end justify-center lg:mt-28 pb-3 lg:pb-0">
          <div className='text-end'>
            <ReactStars
              count={5}
              color1={'#fd853a'}
              size={32}
              color2={'#fd853a'} />
            <p className='text-4xl font-bold'>10 years</p>
            <p className='font-medium'>Experience</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner