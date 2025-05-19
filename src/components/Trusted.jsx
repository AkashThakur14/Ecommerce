import React from 'react'

export const Trusted = () => {

    const partner = [
        { id: "1", img: '/Images/partner1.png', },
        { id: "2", img: '/Images/partner5.png', },
        { id: "3", img: '/Images/partner3.png', },
        { id: "4", img: '/Images/partner1.png', },
        { id: "5", img: '/Images/partner5.png', },
    ];
    return (
        <div className='trusted-wrapper pt-60 pb-60'>
            <div className="container">
                <h2>Trusted by 100+ Company</h2>
                <div className="partner-row">
                    {partner.map((partneritem) => (
                        <div key={partneritem.id} className="partner-image-box">
                            <img src={partneritem.img} alt={partneritem.title} className="partner-box-img" />
                        </div>

                    ))}

                </div>

            </div>
        </div>
    )
}

