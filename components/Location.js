import React from 'react'
import Image from 'next/image'
import mapimg6 from "../image/map-6.png";

function Location() {
  return (
    <div className="flex items-center shadow-lg p-[16px] rounded-[16px] ">
      <div className="flex space-x-[16px] items-center">
        <div className="w-[90px] h-[90px]">
          <Image
            src={mapimg6}
            alt=""
            className="rounded-[8px] w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col p-x-2 justify-center ">
          <h3 className=" text-Charcoal font-semibold text-[16px] mb-2">
            {" "}
            Siknasfortet
          </h3>
          <p className="font-medium font-Poppins  text-[15px] text-black">
            65,8680938,
            <br /> 22,6435511
          </p>
        </div>
      </div>
    </div>
  );
}

export default Location