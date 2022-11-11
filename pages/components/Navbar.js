import React from 'react'
import Image from "next/image";
import Icon from "../../public/images/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link'
// import the icons you need
import {
  faSearch,
  faAmbulance,
  faAnchor,
  faBars
} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className='bg-[#111111]'>
           {/*Header Section i.e Navbar */}
      <div className="flex justify-between items-center p-3 mx-4">
        <Image src={Icon} alt="Icon" height={30} width={30}></Image>
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
          <div className='flex md:hidden'>
          <FontAwesomeIcon
            icon={faBars}
            style={{ fontSize: 14, color: "white" }}
          />
          </div>
        </div>
      </div>
        {/*Header Section i.e Navbar */}
    </div>
  )
}
