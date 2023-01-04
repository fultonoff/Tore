import React from 'react'
import Image from 'next/image'
import toreImg from '../image/torehouse2.png'
import kalixImg from '../image/kalixhouse.svg'
import renaImg from '../image/renahouse.svg'
import luleaImg from '../image/luleahouse.svg'

function HomePrice() {
  return (
    <section className="maxW mx-auto px-2 mb-[60px]">
      <h1 className="font-bold font-poppins text-2xl md:text-[36px] text-center md:text-left my-[30px]">
        Medelpris per en kvadratmeter
      </h1>

      <div className="flex flex-col md:flex-row w-full space-y-[8px] md:space-y-0 space-x-0 md:space-x-[8px] px-2">
        <div className="flex flex-col bg-Blue/40 p-4 md:w-[50vw] items-center justify-center relative rounded-lg">
          <div className="relative">
            <Image src={toreImg} alt="" className="mt-20 h-[100px] w-[200px]" />
            <div className="bg-white absolute flex items-end space-x-1 left-[20%] top-3 p-3 rounded-md shadow-md">
              <span className="font-bold text-2xl md:text-[30px]">3 000</span>
              <span>kr/m²</span>

              <div
                className="w-0 h-0 absolute top-[100%] border-l-[20px] border-l-transparent rounded-sm 
                        border-t-[20px] border-t-white
                        border-r-[20px] border-r-transparent"
              ></div>
            </div>
          </div>
          <p className="font-bold font-poppins text-2xl md:text-[36px] my-[30px]">
            Töre
          </p>
        </div>

        <div className="flex flex-col w-full md:w-[50vw] space-y-[8px] md:space-x-0 space-x-0 md:space-y-[8px] ">
          <div className="flex flex-col items-center h-full bg-Green/40 p-4 relative rounded-md">
            <div className="relative">
              <Image src={kalixImg} alt="" className="mt-20 " />
              <div className="bg-white absolute flex items-end space-x-1 left-[20%] top-3 p-3 rounded-md shadow-md">
                <span className="font-bold text-1xl md:text-[20px]">6 000</span>
                <span>kr/m²</span>

                <div
                  className="w-0 h-0 absolute top-[100%] border-l-[10px] border-l-transparent rounded-sm 
                        border-t-[10px] border-t-white
                        border-r-[10px] border-r-transparent"
                ></div>
              </div>
            </div>
            <p className="font-bold font-poppins text-2xl md:text-[20px] my-[10px]">
              Kalix
            </p>
          </div>
          <div className="flex h-full w-full space-x-[8px] justify-between">
            <div className="flex w-full bg-yellow/40 p-4 flex-col rounded-md items-center">
              <div className="relative">
                <Image src={renaImg} alt="" className="mt-20 " />
                <div className="bg-white absolute flex space-x-1 w-[100%] items-center left-[5%] top-3 p-3 rounded-md shadow-md">
                  <span className="font-bold text-1xl md:text-[20px]">
                    6 700
                  </span>
                  <span>kr/m²</span>

                  <div
                    className="w-0 h-0 absolute top-[100%] border-l-[10px] border-l-transparent rounded-sm 
                        border-t-[10px] border-t-white
                        border-r-[10px] border-r-transparent"
                  ></div>
                </div>
              </div>
              <p className="font-bold font-poppins text-2xl md:text-[24px] my-[10px]">
                Råneå
              </p>
            </div>

            <div className="flex w-full bg-yellow/40 p-4 flex-col rounded-md items-center">
              <div className="relative">
                <Image src={luleaImg} alt="" className="mt-20 " />
                <div className="bg-white space-x-1 absolute flex items-center left-[5%] top-3 p-3 w-[100%] rounded-md shadow-md">
                  <span className="font-bold text-1xl md:text-[20px]">
                    15 000
                  </span>
                  <span>kr/m²</span>

                  <div
                    className="w-0 h-0 absolute top-[100%] border-l-[10px] border-l-transparent rounded-sm 
                        border-t-[10px] border-t-white
                        border-r-[10px] border-r-transparent"
                  ></div>
                </div>
              </div>
              <p className="font-bold font-poppins text-2xl md:text-[24px] my-[10px]">
                Luleå
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePrice