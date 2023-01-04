import React from 'react'
import Link from 'next/link'
import featureImg from "../image/feature-img-3.jpg";
import Image from 'next/image'

function City() {
  return (
    <section className=" maxW mx-auto py-[30px]">
      <div className="flex flex-col  md:flex-row space-y-5 md:space-y-0 space-x-0 md:space-x-5 px-2">
        <div className=" bg-[#3A6AD4]/40 p-[24px] flex flex-col justify-between space-y-5 w-full md:w-[50vw] rounded-[8px] md:rounded-[16px]">

            <div>


          <h1 className="font-bold md:text-[40px] text-[20px] text-center md:text-left">
            Tva förskolor och skola(F– 6)
          </h1>
          <p className='mt-[30px]'>
            För närvarande går drygt 100 elever (6-12 år) i skolan och på
            fritidshem är ca 25 barn. Det finns en privat dagis i Töre som heter
            Silverskatten.
          </p>
            </div>

          <div className="flex w-full justify-between mt-auto">
            <Link href="" className="bg-white px-10 py-3">
              Skolan
            </Link>
            <Link href="" className="bg-white px-10 py-3">
              Skolan
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:w-[50vw] w-full gap-2 px-2">
          <div className="md:rounded-[8px] rounded-sm overflow-hidden shadow-lg relative duration-200 group">
            <Image
              src={featureImg}
              alt=""
              className="w-full h-full group-hover:scale-[1.2] duration-200 object-cover"
            />
          </div>

          <div className="md:rounded-[8px] rounded-sm overflow-hidden shadow-lg relative duration-200 group">
            <Image
              src={featureImg}
              alt=""
              className="w-full h-full group-hover:scale-[1.2] duration-200 object-cover"
            />
          </div>

          <div className="md:rounded-[8px] rounded-sm overflow-hidden shadow-lg relative duration-200 group">
            <Image
              src={featureImg}
              alt=""
              className="w-full h-full group-hover:scale-[1.2] duration-200 object-cover"
            />
          </div>

          <div className="md:rounded-[8px] rounded-sm overflow-hidden shadow-lg relative duration-200 group">
            <Image
              src={featureImg}
              alt=""
              className="w-full h-full group-hover:scale-[1.2] duration-200 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default City
