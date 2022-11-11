import React from "react";
import Image from "next/image";
import Google from "../../public/images/google.png";
import Meta from "../../public/images/meta.png";
import IBM from "../../public/images/ibm.png";

export default function Certificates() {
  return (
    <div className="font-monolisa md:mx-32 mx-4 md:mt-40 mt-20">
      <h1 className="text-white text-lg">Professional Certificates</h1>
      <h1 className="text-[#AEAEAE] mt-2">
        A collection of some of my professional certifications
      </h1>
      <div className="md:flex justify-between md:space-x-6">
        <div className="mt-8 bg-[#191919] hover:bg-[#1e1e1e] cursor-pointer rounded-lg p-6 border border-[#4D4D4D] items-start">
          <Image src={Meta} />
          <div className="ml-4">
            <h1 className="text-white text-base md:mt-2 mt-2">
              META Full Stack Engineer Certificate
            </h1>
            <p className="md:text-sm text-xs text-[#AEAEAE] mt-2">
              Relevant Course Work: Intorduction to the Web, Advanced
              Javascript, Python Programming Language, Version Control, Advanced
              React, Principles of UX/UI design, Django Web Framework, API'S,
              Cloud Computing.
            </p>
          </div>
        </div>
        <div className="mt-8 bg-[#191919] hover:bg-[#1e1e1e] cursor-pointer rounded-lg p-6 border border-[#4D4D4D] items-start">
          <Image src={IBM} />
          <div className="ml-4">
            <h1 className="text-white text-base md:mt-2 mt-2">
              IBM Cloud Developer with React Js and Node Js
            </h1>
            <p className="md:text-sm text-xs text-[#AEAEAE] mt-2">
              Relevant Course Work: Create server-side applications with Node.js
              Javascript framework, Introduction to Cloud Computing, Practice
              DevOps and utilize continuous delivery pipelines with Git,
              Deploying web application to IBM Cloud platform, Extending Node.js
              application with third-party packages.
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex justify-between md:space-x-6">
        <div className="mt-8 bg-[#191919] hover:bg-[#1e1e1e] cursor-pointer rounded-lg p-6 border border-[#4D4D4D] items-start">
          <Image src={Google} />
          <div className="ml-4">
            <h1 className="text-white text-base md:mt-2 mt-2">
              Google Mobile app development with Flutter
            </h1>
            <p className="md:text-sm text-xs text-[#AEAEAE] mt-2">
             Project Work that required the development of a Flutter application using a Code Server development enviornment.
            </p>
          </div>
        </div>
        <div className="mt-8 bg-[#191919] hover:bg-[#1e1e1e] cursor-pointer rounded-lg p-6 border border-[#4D4D4D] items-start">
          <Image src={Google} />
          <div className="ml-4">
            <h1 className="text-white text-base md:mt-2 mt-2">
              Google Data analytics Foundations Course
            </h1>
            <p className="md:text-sm text-xs text-[#AEAEAE] mt-2">
              Relevant Course Work: Key concepts involved in data analytics including data, data analysis, and data ecosystem, Conduct an analytical thinking self assessment giving specific examples of the application of analytical thinking, Role of spreadsheets, query languages, and data visualization tools in data analytics.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
