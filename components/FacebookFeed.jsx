import React from 'react'
import childrenImg from '../image/facebook-feed.png'
import childrenImg2 from '../image/facebook-feed2.jpg'
import Feeds from './Feeds';
import Image from 'next/image'
import FeedCarousel from '../components/FeedCarousel'
import Cta from './Cta';

function FacebookFeed() {
  return (
    
    <section className="bg-grayinsh pt-1 w-full">
      <div className=" maxW mx-auto ">
        {/* Winter */}
        <div className=" w-full">
          <div className="relative w-full md:h-[484px] rounded-[16px] overflow-hidden mx-auto shadow-lg mt-[73px] mb-[74px] group">
            <Image
              src={childrenImg2}
              alt=""
              className="w-full h-full object-cover group-hover:scale-[1.1] duration-200"
            />
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>

            <div className=" absolute bottom-[50px] w-full flex flex-col md:ml-[53px]">
              <h2 className="text-white font-poppins font-bold text-2xl md:text-[45px] text-center md:text-left md:mb-2">
                Flytta till Töre!
              </h2>
              <p className="text-white text-center md:text-left tex-[20px]">
                Platsen Där Man Väljer Att Leva
              </p>
            </div>
          </div>
        </div>

        {/* CTA Feature */}
        <Cta title={'Facebook'} description={'What people says about us'} button={'See All'} link='/'/>

      </div>

      <Feeds/>

      
    </section>
    
  );
}

export default FacebookFeed
