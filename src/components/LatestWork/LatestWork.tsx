import Image from 'next/image'
import React from 'react'

const images = [
    {
        img: "/images/brand-study.png",
    },
    {
        img: "/images/brand-study.png",
    },
    {
        img: "/images/brand-study.png",
    },
    {
        img: "/images/brand-study.png",
    },
    {
        img: "/images/brand-study.png",
    },
    {
        img: "/images/brand-study.png",
    },
    {
        img: "/images/brand-study.png",
    },
    {
        img: "/images/brand-study.png",
    },
    {
        img: "/images/brand-study.png",
    },
    {
        img: "/images/brand-study.png",
    },
    {
        img: "/images/brand-study.png",
    },
    {
        img: "/images/brand-study.png",
    },
    
]
const LatestWork = () => {
  return (
    <div id=''>
      {images.map((i, index) => (
        <Image key={index} src={i.img} alt='' width={100} height={100}/>
      ))}
    </div>
  )
}

export default LatestWork
