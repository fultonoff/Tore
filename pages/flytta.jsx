import React from 'react'
import Hero from '../components/Hero'
import flyttaImg from '../image/flytta.jpg'
import SmallItems from '../components/SmallItems'
import Cities from '../components/Cities'
import CityDescription from '../components/CityDescription'
import Companies from '../components/Companies'
import City from '../components/City'
import Cta from '../components/Cta'
import RestaurantSlide from '../components/RestaurantSlide'
import HomePrice from '../components/HomePrice'
import Video from '../components/Video'
import ScrollToTop from '../components/ScrollToTop'

function Flytta() {
  return (
    <main>
      {/* Hero */}
      <Hero
        title="Flytta till Töre!"
        description="Platsen Där Man Väljer Att Leva"
        image={flyttaImg}
      />
      <section className="maxW mx-auto">
        <SmallItems />
      </section>
      <ScrollToTop/>
      <Cities />
      <CityDescription />
      <Companies />
      <City />
      <section className="mt-[60px]">
        <Cta title={"Restauranger and pizzeria"} button={"See All"} />
      </section>
      <RestaurantSlide />
      <HomePrice />
      <Video/>
    </main>
  );
}

export default Flytta