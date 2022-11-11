import Image from "next/image";
import React from "react";
import gradient from "../../public/images/gradient.png";
import olamide from "../../public/images/olamide.png";
import styled  from "styled-components"

export default function Hero() {
  return (
    <div className="font-monolisa md:mx-20 mt-20">
      <h1 className="text-[#EEA47F] text-xs md:mx-14 mx-6">OLATUNDE OLAMIDE VICTOR</h1>
      <h1 className="md:text-4xl text-3xl text-[#EAEAEA] mt-4 md:mx-14 mx-6">
        Software Engineer creating impactful Software solutions with an amazing
        user experience
      </h1>
      <p className="text-sm text-[#AEAEAE] md:mx-14 mx-6 md:mt-6 mt-3">
        I’m Victor Olamide Olatunde, a Software Engineer based in Cyprus, with
        over 4 years of Experience.I specialise in the front-end development of
        websites, mobile apps, and desktop applications, keeping simplicity and
        speed as my top targets in development :){" "}
      </p>
      <Wrapper className="p-3 px-4 rounded-full border border-[#4D4D4D] bg-[#191919] hover:bg-[#1e1e1e] cursor-pointer text-sm md:mx-14 mx-6 mt-8 text-[#ffffff]">Email me</Wrapper>
    </div>
  );
}


const Wrapper = styled.button`
  border: 2;
`;
