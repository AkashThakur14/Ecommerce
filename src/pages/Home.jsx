import React from 'react'
import { HeroSection } from '../components/HeroSection'

export const Home = () => {
  const data = {
    sname:"Akash Store",
}

  return (
    <>
      <div className="container">
        <HeroSection myData = {data} />

      </div>

    </>
  )
}

