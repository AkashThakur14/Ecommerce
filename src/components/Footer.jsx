import { NavLink } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className='footer-wrapper pt-60 pb-60'>
      <div className='container'>
        <div className="row">
          <div className="col-one">
            <img src="./Images/logo.png" alt="image logo " />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="col-two">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <form action="/" method='post'>
              <input type="email" name="email" placeholder='Subscribe Now' />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
          <div className="col-three">
            <h4>Quick Links</h4>
            <ul className='footer-list'>
              <li><NavLink to="/" className="nav-link">Home</NavLink></li>
              <li><NavLink to="/about" className="nav-link">About</NavLink></li>
              <li><NavLink to="/products" className="nav-link">Products</NavLink></li>
              <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
            </ul>
          </div>
          <div className="col-four">
            <div className="contact">
              <h4>Contact Us</h4>
              <strong>Phone:</strong> <a href="tel:+1234567890">9988385532</a><br />
              <strong>Email:</strong> <a href="mailto:info@example.com">ak9988385532@gmail.com</a>
            </div>
            <div className="follow">
              <h4>Follow Us</h4>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fa-lg" style={{ marginRight: '10px' }}></i>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f fa-lg" style={{ marginRight: '10px' }}></i>
              </a>
              <a href="https://linkedin.com/in" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in fa-lg"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>

  )
}

