import React from "react";
import Image from "next/image";
import Link from "next/link";
import facebookFeddImgr from '../image/feedFacebookImg.png'

function Slide() {
  return (
    <div className="rounded-[8px] bg-white p-[24px]  mx-auto shadowcst shadow-xl max-w-[300px] border">
      <p className="text-black font-montserrat font-medium text-[14px]">
        Pop up loppis söndag. Sista rycket innan FlowerTower omvandlas till
        något annat! Skynda att fynda! Välkomna till Köpmanvägen 18, Töre
      </p>
      <Link
        href="View more"
        className="font-bold text-[14px] text-right block mr-0 ml-auto mt-[24px] cursor-pointer"
      >
        View more
      </Link>

      <div className="h-[80%] mt-[40px]">
        <Image src={facebookFeddImgr} alt="" className="w-full object-cover"/>
      </div>
    </div>
  );
}

export default Slide;
