import React from 'react'
import Link from 'next/link'

function Cta({title, description, button, link}) {
  return (
    <div className="flex flex-col md:flex-row maxW mx-auto items-center md:items-start space-y-10 md:space-y-0 justify-center md:justify-between">
      <div className="flex flex-col">
        <h3 className="font-bold text-center md:text-left md:text-[36px] font-poppins text-3xl mb-[5px]">
          {title}
        </h3>
        <p className="text-[14px] md:text-[16px] text-center md:text-left text-Charcoal">
          {description}
        </p>
      </div>

      <div className="cursor-pointer border-2 border-Blue rounded-[4px] text-Blue font-medium text-2xl md:text-[14px] px-[16px] py-[5px] hover:text-white duration-200 hover:bg-Blue">
        <Link href={`${link}`}>
        {button}
        </Link>
      </div>
    </div>
  );
}

export default Cta
