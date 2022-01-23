import React from 'react';
import './Landing.css'

// Components
import { LandingHeader } from './LandingHeader'
import { LandingSearch } from './LandingSearch'

const Landing = () => {
   return(
      <div className="landing-container">
         <LandingHeader />
         <LandingSearch />
      </div>
   )
}

export default Landing;