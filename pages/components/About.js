import React from "react";
import Image from "next/image";
import mide from "../../public/images/mide.png";
import styled from "styled-components";

export default function About() {
  return (
    <div className="md:mt-20 mt-10 md:mx-28 mx-8 font-monolisa">
      <h1 className="text-white md:text-2xl text-xl">Professional Summary</h1>
      <div className="md:flex items-start md:space-x-6 mt-8">
        <Image src={mide} />
        <div className="text-white md:mt-0 mt-6">
          <h1>Software Engineer</h1>
          <p className="text-[#8B8B8B] text-xs mt-3 md:mr-8">
            Experienced Software Engineer adept in all stages of advanced web
            development. Knowledgeable in user interface, testing, and debugging
            processes. Bringing forth expertise in design, installation,
            testing, and maintenance of web systems. Equipped with a diverse and
            promising skill-set. Proficient in an assortment of technologies,
            including Java, React Native, Javascript, HTML, CSS, React JS, Next JS, Redux,
            Node JS, Mongo DB, SQL, Firebase, and a bit of WEB 3.0 Technologies. Able to effectively
            self-manage during independent projects, as well as collaborate in a
            team setting.
          </p>
          <Wrapper className="p-3 px-4 rounded-full border border-[#AEAEAE] bg-[#191919] hover:bg-[#1e1e1e] cursor-pointer text-xs mt-4 text-[#ffffff]">
            Download Resume
          </Wrapper>
        </div>
      </div>
    </div>
  );
}

const Wrapper = styled.button`
  border: 2;
`;
