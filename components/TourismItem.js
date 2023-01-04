import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function TourismItem(image, name, id) {
  return (
    <div className="max-w-[400px] h-[370px] rounded-[16px] overflow-hidden shadow-lg relative duration-200 group">
      <Image
        src={image}
        alt=""
        className="w-full h-full group-hover:scale-[1.2] duration-200 object-cover"
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
      <div className="text-box absolute bottom-10 w-full flex flex-col justify-center items-center space-y-5">
        <h2 className="text-white font-poppins font-bold text-[24px]">
          {name}
        </h2>
        <Link
          href={`/tourism/${id}`}
          className="w-[70%] bg-yellow flex justify-center items-center py-[13px] font-poppins font-medium rounded-[4px]"
        >
          More
        </Link>
      </div>
    </div>
  );
}

export default TourismItem