import React, { useContext } from 'react';
import { AppContext } from '../context/Productcontext.jsx';
import { NavLink } from 'react-router-dom'; 

export const FeatureProduct = () => {
    const { isLoading, featured } = useContext(AppContext);

    return (
        <div className="feature-wrapper pt-60 pb-60">
            <div className="container">
                <h2 className="feature-heading">Featured Products</h2> 
                {isLoading ? (
                    <p className="loading-text">Loading...</p>
                ) : (
                    <div className="custom-product-list">
                        {featured.map((product) => (
                            <div key={product.id} className="custom-product-card">
                                <NavLink
                                    to={`/singleproduct/${product.id}`}
                                    className="custom-product-link"
                                >
                                    <h3 className="custom-product-title">{product.name}</h3>
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="custom-product-image"
                                    />
                                    <h4>Rs {product.price.toLocaleString()}</h4>
                                </NavLink>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};
