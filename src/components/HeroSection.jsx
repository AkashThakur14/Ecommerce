import React from 'react'
import { NavLink } from 'react-router-dom';

export const HeroSection = ({myData}) => {

  const {sname} = myData;
    return (
        <div className='hero-wrapper pt-60 pb-60'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-50'>
                           <span className="into-data">Welcome to</span>
                            <h1 className='main-heading'>{sname}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ab, nihil hic ex iusto tenetur laborum sequi repellat animi iure maiores neque esse! Minima nobis consequatur at magni eum error?</p>
                   <NavLink to="/" className="button button--primary">Shop Now</NavLink>
                    </div>
                    <div className='col-50'>
                        <figure>
                               <img src="/Images/stor.png" alt="stor" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}
