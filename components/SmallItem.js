import React from 'react'
import Image from 'next/image'
import featureImg from '../image/feature-img-3.jpg'
import {motion} from 'framer-motion'

function SmallItem(image, title, description) {
  return (
    <div
    
    
    
    className="max-w-[400px] h-[370px] rounded-[16px] overflow-hidden shadow-lg relative duration-200 group">
      <Image
        src={featureImg}
        alt=""
        className="w-full h-full group-hover:scale-[1.2] duration-200 object-cover"
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
      <div className="text-box absolute bottom-3 w-full flex flex-col justify-center items-center">
        <h2 className="text-white font-poppins font-bold text-[24px] ">
          Perfekt läge
        </h2>
        <p className="text-white text-center">Knutpunkt av E4 och E10, Bottenviken</p>
      </div>
    </div>
  );
}

export default SmallItem