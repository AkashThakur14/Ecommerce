import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/Productcontext.jsx';

export const SingleProduct = () => {
  const { id } = useParams();
  const { isLoading, featured } = useContext(AppContext);

  if (isLoading) {
    return <p className="loading-text">Loading...</p>;
  }

  const product = featured.find((p) => p.id === id);

  if (!product) {
    return <p className="error-text">Product not found</p>;
  }

  const {
    name,
    image,
    company,
    price,
    colors,
    description,
    category,
    shipping,
  } = product;

  return (
    <div className="single-product-page pt-60 pb-60">
      <div className="container">
        <div className="single-product">
          <div className="product-image">
            <img src={image} alt={name} />
          </div>
          <div className="product-info">
            <h2>{name}</h2>
            <p><strong>Brand:</strong> {company}</p>
            <h3>Price: ₹{price.toLocaleString()}</h3>
            <p><strong>Description:</strong> {description}</p>
            <p><strong>Category:</strong> {category}</p>

            <div className="colors">
              <strong>Available Colors:</strong>
              <div className="color-swatch-group">
                {colors.map((color, index) => (
                  <span
                    key={index}
                    className="color-swatch"
                    style={{
                      backgroundColor: color,
                      border: color === '#ffffff' ? '1px solid #ccc' : 'none',
                    }}
                  ></span>
                ))}
              </div>
            </div>

            {shipping && <p className="shipping-info">🚚 Free Shipping Available</p>}

            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
