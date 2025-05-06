import React from 'react'
import HeroSection from './HeroSection';
import FeaturesSection from "./FeaturesSection" ;
import { WorldMap } from '@/components/ui/world-map';
import DiscoverSection from './DiscoverSection';
import CallToActionSection from './CallToActionSection';
import FooterSection from './FooterSection';



const Landing  = () => {
  return (
    <div>
        <HeroSection/>
        <FeaturesSection/>
        <DiscoverSection/>
        <CallToActionSection />

            <WorldMap/>
            <FooterSection />
               
        
        
        


      
    </div>
  )
}

export default Landing ;
