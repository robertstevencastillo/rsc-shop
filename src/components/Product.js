import React, { useState } from "react";
import "./Product.css";

const Product = props => {
  const [itemQuantity, setItemQuantity] = useState(1)
  const possibleItemQuantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleQuantityChange = (event) => {
    setItemQuantity(event.target.value)
  }

  const addToCart = () => {
    props.addToCart({
      product: props.product,
      quantity: itemQuantity
    });


    props.history.push("/products-list");
  };

  return (
    <div className="product">
      <div className="top-product-row">
        <div className="product-image-container">
          <img alt={props.product.name} src={props.product.img} />
        </div>
        <div className="product-name-rating-container">
          <h2 className="text-2xl">{props.product.name}</h2>
          <p>Average Rating:{props.product.avg_rating}</p>
          <p className="price text-lg">${props.product.price}</p>
          <div className='quantity-select-list-container'>
            <label>Quantity</label>
            <select onChange={handleQuantityChange}> 
              {possibleItemQuantity.map( (quantity, index) => {
                return <option key={quantity} value={quantity}>{quantity}</option> 
                } 
              )}
            </select>
          </div>
          <button className="add-to-cart-btn" onClick={addToCart}>
            Add To Cart
          </button>
        </div>
      </div>
      <p className="description">{props.product.product_desc}</p>
    </div>
  );
};

export default Product;
