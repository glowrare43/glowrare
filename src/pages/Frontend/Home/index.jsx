import React from 'react'
import HeroSection from './HeroSection'
import Benefits from './Benefits'
import FeaturedProducts from './FeaturedProducts'
import MissionSection from './MissionSection'
import WhyChoose from './WhyChoose'
import PromoBanner from './PromoBanner'
import Testimonials from './Testimonials'
import InstagramGallery from './InstagramGallery'

const Home = () => {
    return (
        <main>
            <HeroSection />
            <Benefits />
            <FeaturedProducts />
            <MissionSection />
            <WhyChoose />
            <PromoBanner />
            <Testimonials />
            <InstagramGallery />
        </main>
    )
}

export default Home