import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { Services } from '../components/Services'

export const Home = () => {
  const data = {
    sname:"Akash Store",
}

  return (
        <div>
        <HeroSection myData = {data} />
        <Services />
</div>


  )
}

