import React from "react";
import Image from "next/image";
import icon from "../../public/images/projecticon.png";
import projec from "../../public/images/project.png";
import project from "../../public/images/finn.png";
import Disney from "../../public/images/Disney.png";

export default function Projects() {
  return (
    <div className="font-monolisa md:mx-32 mx-4 mt-40">
      <h1 className="text-white text-lg">Featured Projects</h1>
      <h1 className="text-[#AEAEAE] mt-2">
        A collection of some of my recently built projects
      </h1>
      <div className="">
        <div className="mt-8 bg-[#191919] hover:bg-[#1e1e1e] cursor-pointer rounded-lg md:p-6 p-3 border border-[#4D4D4D] items-start">
          <Image src={project} />
          <div className="md:ml-4">
            <h1 className="text-white text-base md:mt-8 mt-2">Office Work</h1>
            <p className="md:text-sm text-xs text-[#AEAEAE] mt-2">
            A collection of some outstanding works i have contributed to as a full stack engineer at my present workplace, ranging across iOS apps, android apps, and web apps, mainly projects centered on providing financial services through technology.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-[#191919] hover:bg-[#1e1e1e] cursor-pointer rounded-lg md:p-6 p-3 border border-[#4D4D4D] items-start">
          <Image src={Disney} />
          <div className="md:ml-4">
            <h1 className="text-white text-base md:mt-8 mt-2">Disney Plus Clone</h1>
            <p className="md:text-sm text-xs text-[#AEAEAE] mt-2">
              A full stack build of a disney replica for watching movies with
              complete functionality of authentication movies list, profile,
              recommended movies and lots more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
