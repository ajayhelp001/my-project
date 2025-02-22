import React from 'react'
import HeroSection from '../Components/HeroSection'
import SpeedAreaSection from '../Components/SpeedAreaSection'
import CounterSection from '../Components/CounterSection'
import WhoWeAreSection from '../Components/WhoWeAreSection'
import UltimateViewSection from '../Components/UltimateViewSection'
import WhyChooseUsSection from '../Components/WhyChooseUsSection'
import FaqSection from '../Components/FaqSection'
import TestimonialSection from '../Components/TestimonialSection'
import BrandsSection from '../Components/BrandsSection'

const Home = () => {
  return (
    <>
        <HeroSection/>
        <SpeedAreaSection/>
        <CounterSection/>
        <WhoWeAreSection/>
        <UltimateViewSection/>
        <WhyChooseUsSection/>
        <FaqSection/>
        <TestimonialSection/>
        <BrandsSection/>
    </>
  )
}

export default Home