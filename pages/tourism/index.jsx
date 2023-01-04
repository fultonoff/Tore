import React from 'react'
import Hero from '../../components/Hero'
import FeedsCarousel from '../../components/FeedCarousel'
import Cta from '../../components/Cta'
import TourismPlaces from '../../components/TourismPlaces'
import ScrollToTop from "../../components/ScrollToTop";

import tourismImage from '../../image/tourism-bg.jpg'

function Tourism() {
  return (
    <main>
      {/* Hero */}
      <Hero title='Turism Töre' description='Platsen Där Man Väljer Att Leva' image={tourismImage}/>

      {/* Places */}
      <TourismPlaces/>

      {/* Facebook feed */}

      <section className=' bg-grayinsh pt-10 px-2'>


      <Cta title='Facebook' description='What people says about us' button='See All' link='www.facebook.com'/>
      </section>

      <section className='pb-[200px] bg-grayinsh'>

      <ScrollToTop/>
      <FeedsCarousel/>
      </section>
     
    </main>
  )
}

export default Tourism