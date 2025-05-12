import React from 'react'
import { NavLink } from 'react-router-dom';

export const HeroSection = ({myData}) => {

  const {sname} = myData;
    return (
        <div className='main-wrapper'>
            <div className="hero-inner inner-wrapper">
                <div className="hero-left-content">
                    <p className="into-data">Welcome to</p>
                    <h1>{sname}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ab, nihil hic ex iusto tenetur laborum sequi repellat animi iure maiores neque esse! Minima nobis consequatur at magni eum error?</p>
                   <NavLink to="/" className="button button--primary">Shop Now</NavLink>
                </div>
                <div className="hero-right-image">
                    <img src="/Images/stor.png" alt="stor" />
                </div>

            </div>
        </div>
    )
}
