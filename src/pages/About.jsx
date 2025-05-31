import React, { useContext } from 'react'
import { AppContext } from '../context/Productcontext';

export const About = () => {

  const myName = useContext(AppContext);

  return (
    <>
    {myName}
    <h1>About</h1>
    
    </>
  )
}

