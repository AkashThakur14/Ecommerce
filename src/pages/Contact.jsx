import React from 'react'

export const Contact = () => {
  return (
    <div className='contact-wrapper pt-60 pb-60'>
      <div className="container">
        <h2>Contact Form</h2>


        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26988.361215757806!2d75.63125588387787!3d32.270318178252516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391c7f5d473c84b3%3A0x5335739bee705d89!2sPathankot%2C%20Punjab%20145001!5e0!3m2!1sen!2sin!4v1747620948336!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0, display: 'block', margin: '0 auto' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="contact-form">
          <form action="https://formspree.io/f/xgvkqeao" method="post">
            <input type="text" name="name" placeholder='Enter Your Name' required autoComplete='off' />
            <input type="email" name="email" placeholder='Enter Your Email' required autoComplete='off' />
            <input type="tel" name="phone" placeholder='Phone' required autoComplete='off' />
            <textarea name="message" cols="30" rows="10" placeholder='Enter messages' autoComplete='off'></textarea>
            <input type="submit" value="Send" />

          </form>
        </div>
      </div>
    </div>
  )
}
