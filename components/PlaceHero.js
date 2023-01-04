import React from "react";
import Image from "next/image";
import img from "../image/her-bg-3.jpg";
import Link from 'next/link'

function PlaceHero({ image, title, description }) {
  return (
    <header className="h-[80vh] w-full z-1  flex justify-center  bg-grayinsh border-t">
      <div className="flex flex-col md:flex-row maxW mx-auto mt-5 items-center space-y-10 md:space-y-0 space-x-0 md:space-x-10 px-2 ">
        <div className="flex flex-col items-center  md:items-start space-y-3 w-[90%] md:w-[50%]">
          <h1 className="text-Charcoal font-poppins font-bold md:text-3xl lg:text-5xl text-3xl text-center md:text-left mb-2">
            {title}
          </h1>
          <p className="text-Charcoal font-poppins font-medium text-[16px] md:text-[20px] mt-2 text-center md:text-left z-10 pb-5">
            {description}
          </p>
          <div className="">
            <Link
              href="/tourism"
              className="text-white bg-Blue font-bold font-poppins inline-block px-10 py-3 rounded-lg text-center w-fit border duration-200 hover:text-Blue hover:bg-white hover:border-Blue"
            >
              See All
            </Link>
          </div>
        </div>

        <div className="h-fit w-full md:w-[50%] bg-green-500 overflow-hidden rounded-lg shadow-lg border-2">
          <img className=" object-cover h-full w-full" src={image} alt=""/>
        </div>
      </div>
    </header>
  );
}

export default PlaceHero;
