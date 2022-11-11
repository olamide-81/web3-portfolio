import React from 'react'
import Image from "next/image";
import gradient from '../../public/images/gradient.png'

export default function Grad() {
  return (
    <div>
        <Image src={gradient} height={10} style={{width: '100%'}} width='100%' className='md:h-20 h-20 mt-20'/>
    </div>
  )
}
