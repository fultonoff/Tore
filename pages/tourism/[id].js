import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import PlaceHero from "../../components/PlaceHero";
import Loading from "../../components/Loading";
import { data } from "./data";

import "swiper/css";
import "swiper/css/pagination";

// import required modules


import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Cta from "../../components/Cta";
import SmallItems from "../../components/SmallItems";
import Slide from "../../components/Slide";
import FeedCarousel from "../../components/FeedCarousel";

function DetailPage() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;
  const idToNum = +id;

  {
    const newData = data.find((item) => item.id === idToNum);

    useEffect(() => {
      setTimeout(() => {
        setShow(true);
        setLoading(false);
      }, 2000);
    }, []);

    return (
      <main className="relative ">
        {loading && <Loading />}

        {show && (
          <div className="mb-[50px]">
            <PlaceHero
              image={newData.image[0]}
              title={newData.name}
              description={newData.description}
              loop={true}
              autoplay={true}
              
            />
          </div>
        )}

        {/* About */}
        {show && (
          <section className="h-screen bg-white">
            <div className="mx-auto maxW">
              <h3 className="text-center md:text-left p-10 font-montserrat text-[16px] md:text-2xl">
                {newData.about}
              </h3>
              {/* Slider */}

              <div className="max-w-5xl mx-auto px-2 mt-[50px]">
                <Swiper
                  navigation={true}
                  pagination={{
                    type: "progressbar",
                  }}
                  autoplay={true}
                  modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                  className="mySwiper w-full h-[500px] shadow-lg rounded-lg overflow-hidden"
                >
                  {newData.image.map((img, index) => {
                    return (
                      <div key={index}>
                        <SwiperSlide className="h-full w-[80%]">
                          <img
                            src={img}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </SwiperSlide>
                        ;
                      </div>
                    );
                  })}
                </Swiper>
              </div>
            </div>

            {/* CTA */}
          </section>
        )}
        <div className="py-10 bg-grayinsh">


        <Cta
          title="Facebook"
          description="What people says about Golobe facilities"
          button="See All"
        />
        </div>
        <div className="bg-grayinsh pb-[200px]">

        <FeedCarousel className='bg-red-500'/>

        </div>
      </main>
    );
  }
}

export default DetailPage;
