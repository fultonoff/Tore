import React from 'react'
import Image from 'next/image'
import featureImg from "../image/feature-img-3.jpg";
import Link from 'next/link';
import {data} from '../pages/tourism/data'
console.log(data)
import TourismItem from './TourismItem';



const TourismPlaces = () =>{

   
  return (
    <section className="w-full mt-[150px] ">
        
      <div className="maxW mx-auto  mt-[150px] grid grid-cols-1  w-full gap-5 md:grid-cols-3 px-2 mb-[200px]">
        
        {data.map((item, index) => {
          return (
            <div
              key={item.id}
              className="md:max-w-[400px] w-full h-[300px] md:h-[370px] rounded-[16px] overflow-hidden shadow-lg relative duration-200 group"
            >
              <Image
                src={item.image[0]}
                alt=""
                layout="fill"
                className="w-full h-full group-hover:scale-[1.2] duration-200 object-cover"
              />
              <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
              <div className="text-box absolute bottom-10 w-full flex flex-col justify-center items-center space-y-5">
                <h2 className="text-white font-poppins text-center font-bold text-[24px]">
                  {item.name}
                </h2>
                <Link
                  
                  href={`/tourism/${item.id}`}
                  className="w-[70%] bg-yellow flex justify-center items-center py-[13px] font-poppins font-medium rounded-[4px]"
                >
                  More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TourismPlaces