import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import facebookFeddImgr from "../image/feedFacebookImg.png";

function FoodSlide() {
  return (
    <div className="rounded-[8px] bg-white p-[24px]  mx-auto shadowcst shadow-xl max-w-[300px] border">
      <h2 className='font-bold text-[24px] font-poppins mb-[16px]'>Roady</h2>
      <p className="text-Charcoal font-montserrat font-medium text-[14px]">
        Sveriges första kravmärkta vägkrog
      </p>
      <Link
        href="View more"
        className="font-bold text-[14px] text-right block mr-0 ml-auto mt-[24px] cursor-pointer"
      >
        View more
      </Link>

      <div className="h-[80%] mt-[40px]">
        <Image src={facebookFeddImgr} alt="" className="w-full object-cover" />
      </div>
    </div>
  );
}

export default FoodSlide
