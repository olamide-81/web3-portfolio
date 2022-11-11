import React from 'react'
import Image from "next/image";
import gradient from '../../public/images/gradient.png'

export default function Gradient() {
  return (
    <div>
        <Image src={gradient} height={10} style={{width: '100%'}} width='100%' className='md:h-4 h-4'/>
    </div>
  )
}
