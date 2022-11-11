import React from "react";
import Image from "next/image";
import icon from "../../public/images/projecticon.png";
import project from "../../public/images/project.png";
import Disney from "../../public/images/Disney.png";

export default function Projects() {
  return (
    <div className="font-monolisa md:mx-32 mx-4 mt-40">
      <h1 className="text-white text-lg">Featured Projects</h1>
      <h1 className="text-[#AEAEAE] mt-2">
        A collection of some of my recently built projects
      </h1>
      <div className="md:flex justify-between md:space-x-6">
        <div className="mt-8 bg-[#191919] hover:bg-[#1e1e1e] cursor-pointer rounded-lg p-6 border border-[#4D4D4D] items-start">
          <Image src={project} />
          <div className="ml-4">
            <h1 className="text-white text-base md:mt-2 mt-2">BudgetStack</h1>
            <p className="md:text-sm text-xs text-[#AEAEAE] mt-2">
              Details are unavailable at the moment, but it is a fintech solution to managing expenses and budgets in an amazing manner
            </p>
          </div>
        </div>

        <div className="mt-8 bg-[#191919] hover:bg-[#1e1e1e] cursor-pointer rounded-lg p-6 border border-[#4D4D4D] items-start">
          <Image src={Disney} />
          <div className="ml-4">
            <h1 className="text-white text-base md:mt-2 mt-2">Disney Plus Clone</h1>
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
