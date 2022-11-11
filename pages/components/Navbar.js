import React, {useState} from 'react'
import Image from "next/image";
import Icon from "../../public/images/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link'
// import the icons you need
import {
  faSearch,
  faAmbulance,
  faAnchor,
  faBars,
  faXmark
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <div className='bg-[#111111] relative'>
           {/*Header Section i.e Navbar */}
      <div className="flex justify-between items-center p-3 md:mx-4 mx-0 opacity-95">
       <h1 className='font-monolisa text-white cursor-pointer text-lg font-bold'><Link href="/">{`MIDE</>`}</Link></h1>
        <div className="flex items-center">
          <ul className="md:flex justify-between items-center space-x-10 font-monolisa text-xs font-light text-[#EAEAEA] mx-2 hidden">
            <li className='hover:text-[#EEA47F] font-monolisa cursor-pointer'>
            <Link href="/">Home</Link>
            </li>
            <li className='cursor-pointer hover:text-[#EEA47F]'>
              <Link href="/about">Professional Summary</Link>
            </li>
            <li className='cursor-pointer hover:text-[#EEA47F]'>
              <Link href="/construction">Projects</Link>
            </li>
            <li className='cursor-pointer hover:text-[#EEA47F]'>
              <Link href="/construction">Contact</Link>
            </li>
          </ul>
          <div className='flex md:hidden cursor-pointer'>
          <FontAwesomeIcon
            icon={faBars}
            style={{ fontSize: 14, color: "white" }}
            onClick={() => setOpen(!open)}
          />
          </div>
        </div>
      </div>
        {/*Header Section i.e Navbar */}

        {/*Mobile Navbar*/}
        <div className={`${
          open? "md:hidden block bg-black translate-x-0 float-right fixed right-0 top-0 z-10 h-full w-fit animate-in ease-in-out duration-700 fade-out-95 zoom-in-95 slide-in-from-right-72"
            : "hidden translate-x-full"
        } ease-in-out duration-700` }>
        <ul className="items-start space-y-10 p-20 font-monolisa text-xs font-light text-[#EAEAEA] mx-2">
            <div className='cursor-pointer'> 
              <FontAwesomeIcon
            icon={faXmark}
            style={{ fontSize: 14, color: "white" }}
            onClick={() => setOpen(!open)}
          /></div>
            <li className='hover:text-[#EEA47F] font-monolisa cursor-pointer'>
            <Link href="/">Home</Link>
            </li>
            <li className='cursor-pointer hover:text-[#EEA47F]'>
              <Link href="/about">Professional Summary</Link>
            </li>
            <li className='cursor-pointer hover:text-[#EEA47F]'>
              <Link href="/construction">Projects</Link>
            </li>
            <li className='cursor-pointer hover:text-[#EEA47F]'>
              <Link href="/construction">Contact</Link>
            </li>
          </ul>
        </div>
    </div>
  )
}
