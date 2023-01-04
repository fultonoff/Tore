import React from 'react'
import Image from 'next/image'
import featureImg from "../image/feature-img-3.jpg";

function Cities() {
  return (
    <section className="maxW mx-auto my-[74px] flex flex-col md:flex-row items-center  w-full">
      <div className="md:w-[50vw]  h-[370px] md:rounded-[16px] mx-2 rounded-lg overflow-hidden shadow-lg relative duration-200 group">
        <Image
          src={featureImg}
          alt=""
          className="w-full h-full group-hover:scale-[1.2] duration-200 object-cover"
        />
        <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
        <div className="absolute left-5 bottom-5 w-full flex flex-col justify-center items-center md:items-start">
          <h2 className="text-white font-poppins font-bold text-[24px] text-center md:text-left">
            Mer Än 30 Bussar Varje Dag
          </h2>
          <p className="text-white font-poppins text-center md:text-left md:text-[14px]">
            Det unika läget gör Töre till förbindelselänk mellan Norge, Sverige
            och Finland.
          </p>
        </div>
      </div>

      <div className="flex md:w-[50vw]  mt-[20px] md:mt-0 space-x-4 md:space-y-0 w-full px-5 md:px-0">
        <div className=" w-full h-[370px] md:rounded-[16px] rounded-lg overflow-hidden shadow-lg relative duration-200 group">
          <Image
            src={featureImg}
            alt=""
            className="w-full h-full group-hover:scale-[1.2] duration-200 object-cover"
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
          <div className="text-box absolute bottom-10 w-full flex flex-col md:flex-row md:items-center justify-between items-start md:px-10 px-2">
            <h2 className="text-white font-poppins font-bold text-[24px] ">
              Luleå
            </h2>
            <div className="text-white text-center">
             <span>5</span>
             <span>Mil</span>
            </div>
          </div>
        </div>
        <div className=" w-full h-[370px] md:rounded-[16px] rounded-lg overflow-hidden shadow-lg relative duration-200 group">
          <Image
            src={featureImg}
            alt=""
            className="w-full h-full group-hover:scale-[1.2] duration-200 object-cover"
          />
          <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
          <div className="text-box absolute bottom-10 w-full flex flex-col md:flex-row md:items-center justify-between items-start md:px-10 px-2">
            <h2 className="text-white font-poppins font-bold text-[24px] ">
              Luleå
            </h2>
            <div className="text-white text-center">
             <span>5</span>
             <span>Mil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cities
