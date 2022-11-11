import React from "react";
import Image from "next/image";
import icon from "../../public/images/projecticon.png";

export default function Projects() {
  return (
    <div className="font-monolisa md:mx-32 mx-4 mt-40">
      <h1 className="text-white text-lg">Featured Projects</h1>
      <h1 className="text-[#AEAEAE] mt-2">
        A collection of some of my recently built projects
      </h1>
      <div className="flex mt-8 bg-[#191919] hover:bg-[#1e1e1e] cursor-pointer rounded-lg p-6 border border-[#4D4D4D] items-start">
        <Image src={icon} height={60} width={60} />
        <div className="ml-4">
          <h1 className="text-white text-base">BudgetStack</h1>
          <p className="md:text-sm text-xs text-[#AEAEAE] mt-3">
            A full stack build of a disney replica for watching movies with
            complete functionality of authentication movies list, profile,
            recommended movies and lots more.
          </p>
        </div>
      </div>

      <div className="flex mt-8 bg-[#191919] hover:bg-[#1e1e1e] cursor-pointer rounded-lg p-6 border border-[#4d4d4d] items-start">
        <Image src={icon} height={60} width={60} />
        <div className="ml-4">
          <h1 className="text-white text-base">Disney Plus Clone</h1>
          <p className="md:text-sm text-xs text-[#AEAEAE] mt-3">
            A full stack build of a disney replica for watching movies with
            complete functionality of authentication movies list, profile,
            recommended movies and lots more.
          </p>
        </div>
      </div>
    </div>
  );
}
