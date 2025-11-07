import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='w-full px-4 md:px-9 lg:px-14 bg-[#0D0D0D] flex flex-col md:flex-row justify-center items-center '>
      <div className='w-full md:w-1/3 flex flex-col items-center justify-center'>
        <Image src={"/images/logo.png"} alt="Sabme Studio" width={180} height={100}/>
      </div>
      <div className='w-full md:w-2/3 flex flex-wrap flex-row items-center justify-center space-x-8 md:space-x-4 '>
        <Link href={"#About"}className='text-white'>About</Link>
        <Link href={"#Service"}className='text-white'>Services</Link>
        <Link href={"#LatestWork"}className='text-white'>Latest Work</Link>
        <Link href={"#Testimonials"}className='text-white'>Testimonials</Link>
        <Link href={"#CaseStudy"}className='text-white'>Case Study</Link>
      </div>
       <div className='mt-5 md:mt-0 w-full md:w-1/3 flex flex-wrap flex-row items-center justify-center space-x-8 md:space-x-4'>
        <Link href={"https://www.facebook.com/share/1BP13Vt5uy/"}className='text-white text-2xl'><FaFacebook /></Link>
        <Link href={"https://www.instagram.com/sabmestudio67?igsh=MWFoMHB0Z2hyYmpl"}className='text-white text-2xl'><FaInstagram /></Link>
        <Link href={"https://www.linkedin.com/company/sambestudio/?viewAsMember=true"}className='text-white text-2xl'><FaLinkedin /></Link>
      </div>
    </div>
  )
}

export default Footer
