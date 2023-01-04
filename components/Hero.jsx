import React from 'react'
import { GiBoatFishing } from "react-icons/gi";
import { GiCycling } from "react-icons/gi";
import { GiDeer } from "react-icons/gi";
import { GiFarmer } from "react-icons/gi";
import { GiKnifeFork } from "react-icons/gi";
import Image from 'next/image'
import {motion} from 'framer-motion'

function Hero({title, description, image}) {
  return (
    <motion.header
    
    initial={{
      opacity:0
      
    }}

    animate = {
      {
        opacity: 1
        
      }
    }

    transition = {
      {
        duration: 1
      }
    }
    
    
    
    className="h-[60vh] w-full relative z-1 flex justify-center">
            <Image src={image} alt=''  className='object-cover w-full  top-0 b-0 left-0 right-0 h-full z-0'/>
            <div className = "absolute bg-gradient-to-r from-[#00214da9] to-transparent top-0 bottom-0 left-0 right-0"> </div>
      <div className=" mx-auto maxW absolute md:left-[20%] border-white h-full flex items-center justify-center md:justify-start">
        <motion.div
        
         initial = {
           {
             opacity: 0,
             y: -200

           }
         }

         animate = {
           {
             opacity: 1,
             y:0

           }
         }

         transition = {
           {
             duration: 1
           }
         }
        
        className="text-content">
          <h1 className="text-white font-poppins font-bold md:text-5xl text-[45px] text-center md:text-left">
            
            {
              title
            }
            
          </h1>
          <p className="text-white font-poppins text-[20px] mt-2 text-center md:text-left z-10">
            {description}
            
          </p>
        </motion.div>
      </div>
      

      {/* <div className="feature bg-white p-10 absolute w-4/5 bottom-0 left-[50%] -translate-x-[50%] translate-y-[50%] rounded-[16px] shadow-lg z-30">
        <ul className="flex justify-between md:max-w-[1232px] mx-auto">
          <li className="flex flex-col md:flex-row items-center justify-center md:space-x-2">
            <GiFarmer className="md:text-2xl" />
            
          </li>
          <li className="flex flex-col md:flex-row items-center justify-center md:space-x-2">
            <GiBoatFishing className="md:text-2xl" />
            
          </li>

          <li className="flex flex-col md:flex-row items-center justify-center md:space-x-2">
            <GiDeer className="md:text-2xl" />
            
          </li>

          <li className="flex flex-col md:flex-row items-center justify-center md:space-x-2">
            <GiCycling className="text-sm md:text-2xl" />
            
          </li>

          <li className="flex flex-col md:flex-row items-center justify-center md:space-x-2">
            <GiKnifeFork className="text-sm md:text-2xl" />
            
          </li>
        </ul>
      </div> */}
    </motion.header>
  );
}

export default Hero
