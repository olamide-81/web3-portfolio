import React from 'react'
import Linkedin from '../../public/images/Linkedin.png'
import Github from '../../public/images/GitHub.png'
import Twitter from '../../public/images/Twitter.png'
import Instagram from '../../public/images/Instagram.png'
import Image from "next/image";

export default function Footer() {
  return (
    <div className='bg-[#0D0D0D] p-4 mt-16 font-monolisa'>
       <div className='md:flex justify-between items-start mt-6 md:mx-28 mb-8'>
           <div>
               <h1 className='text-white text-xs'>Olatunde Olamide Victor</h1>
               <div className='flex space-x-4 items-center mt-4'>
                  <Image src={Linkedin} height={20} width={20}/>
                  <Image src={Github} height={20} width={20}/>
                  <Image src={Twitter} height={20} width={20}/>
                  <Image src={Instagram} height={20} width={20}/>
               </div>
           </div>
           <div>
               <h1 className='text-white text-sm md:mt-0 mt-12'>Contact me</h1>
               <div className='space-x-4 items-start mt-4 flex'>
                  <p className='text-white text-xs'>+90533778554</p>
                  <p  className='text-white text-xs'>hello@olamide.pro</p>
                  <p  className='text-white text-xs md:flex hidden'>Kyrenia, Cyprus</p>
               </div>
           </div>
       </div>
       <h2 className='text-xs text-white md:mt-4 mt-6 items-center justify-center flex text-center'>Copyright © 2022 Olamide Pro. All rights reserved.</h2>
    </div>
  )
}
