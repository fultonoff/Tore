import React from "react";
import winter3 from "../image/winter-3.jpg";
import Image from 'next/image'
import SmallItems from "./SmallItems";
import {motion} from 'framer-motion'
import Link from 'next/link'



function Feature() {
  return (
    <motion.div
    
    // initial={{
      
    //   opacity:0,
      
    // }}

    // animate = {
    //   {
        
    //     opacity:1,
        
    //   }
    // }
    
    // transition = {
    //   {
    //     duration: 1
    //   }
    // }
    
    
    className="w-full bg-grayinsh">
      <section className="section-feature mx-auto h-full w-full overflow-hidden maxW ">
        <div className="infrastructure  bg-grayinsh  mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
          <SmallItems/>
           
        </div>
        {/* Winter */}
        <div className=" w-full  md:w-[1232px]">
          <div className="relative md:w-full md:h-[484px] w-[400px] rounded-[16px] overflow-hidden mx-auto shadow-lg mt-[73px] bg-red-400 mb-[74px] group">
            <Image
              src={winter3}
              alt=""
              className="w-full h-full object-cover group-hover:scale-[1.1] duration-200"
            />
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent opacity-75 "></div>

            <div className=" absolute bottom-[50px] w-full flex flex-col md:ml-[53px]">
              <h2 className="text-white font-poppins font-bold text-2xl md:text-[45px] text-center md:text-left">
                Winter Season 2023
              </h2>
              <p className="text-white text-center md:text-left tex-[20px]">
                Platsen Där Man Väljer Att Leva
              </p>
            </div>
          </div>
        </div>

        {/* CTA Feature */}

        <div className="flex flex-col mb-[67px] md:flex-row maxW mx-auto items-center md:items-start space-y-10 md:space-y-0 justify-center md:justify-between">
          <div className="flex flex-col">
            <h3 className="font-bold text-center md:text-left md:text-[36px] font-poppins text-3xl mb-[16px]">Norrbottens knutpunkt</h3>
            <p className="text-[14px] md:text-[16px] text-center md:text-left text-Charcoal">Töre ligger på skärningspunkt av E4 och E10 vägarna</p>
          </div>

          < div className = "cursor-pointer border-2 border-Blue rounded-[4px] text-Blue font-medium text-2xl md:text-[14px] px-[16px] py-[10px] hover:text-white duration-200 hover:bg-Blue" > <Link href='/tourism'> See more places </Link> </div >
        </div>

      
      </section>
    </motion.div>
  );
}

export default Feature;
