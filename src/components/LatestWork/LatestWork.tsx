import Image from 'next/image'
import React from 'react'

const images = [
    {
        img: "/images/img-1.jpg",
    },
    {
        img: "/images/img-2.jpg",
    },
    {
        img: "/images/img-3.jpg",
    },
    {
        img: "/images/img-4.jpg",
    },
    {
        img: "/images/img-5.png",
    },
    {
        img: "/images/img-6.png",
    },
    {
        img: "/images/img-7.png",
    },
    {
        img: "/images/img-8.png",
    },
    {
        img: "/images/img-9.png",
    },
    {
        img: "/images/img-10.png",
    },
    {
        img: "/images/img-11.png",
    },
    {
        img: "/images/img-12.png",
    },
    
]
const LatestWork = () => {
  return (
    <div id='' className='w-full bg-[#0D0D0D] px-4 md:px-9 lg:px-14 flex flex-wrap space-x-9 space-y-5'>
      {images.map((i, index) => (
        <Image key={index} src={i.img} alt='' width={250} height={30}/>
      ))}
    </div>
  )
}

export default LatestWork
