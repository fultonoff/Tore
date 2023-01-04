import React from "react";
import mapimg1 from "../image/map-1.png";
import mapimg2 from "../image/map-2.png";
import mapimg3 from "../image/map-3.png";
import mapimg4 from "../image/map-4.png";
import mapimg5 from "../image/map-5.png";
import mapimg6 from "../image/map-6.png";
import mapimg7 from "../image/map-7.png";
import mapimg8 from "../image/map-8.png";
import Image from 'next/image'
import MapTore from '../components/Map'
import Location from "./Location";


function Maps() {
  const locations =[1,2,3,4,5,6,7]
  return (
    <section className="maps bg-white pb-10">
      <div className="flex flex-col md:flex-row mx-auto maxW items-center md:items-start justify-between mt-[60px] space-y-4 md:space-y-0 md:space-x-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-[70%] ">
          

          {locations.map((location, index)=>{
            return(
              <div key={index}>
              
              <Location />
              </div>
            )
          })}
          <div className="flex items-center shadow-lg p-[16px] rounded-[16px] ">
            <div className="flex space-x-[16px] items-center">
              <div className="w-[90px] h-[90px]">
                <Image
                  src={mapimg6}
                  alt=""
                  className="rounded-[8px] w-full h-full object-fit"
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
          
        </div>

       <div className=" w-full  md:w-1/2 h-[738px] rounded-[16px] overflow-hidden shadow-sm border">
          <MapTore className="w-full h-full  leaflet-container" />
        </div>
      </div>
    </section>
  );
}

export default Maps;
