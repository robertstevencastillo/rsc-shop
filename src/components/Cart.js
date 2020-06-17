import React from "react";
import "./Cart.css";

const Cart = props => {

  const removeProductFromCart = (index) => {
    props.deleteProductFromCart(index);
  }

  const handleClickCheckout = (event) => {
    event.preventDefault();
    props.history.push('/checkout')
  }

  /*Taken From Here - https://stackoverflow.com/a/12830454/5739209 */
  function roundNumber(num, scale) {
    if (!("" + num).includes("e")) {
      return +(Math.round(num + "e+" + scale) + "e-" + scale);
    }
    else {
      var arr = ("" + num).split("e");
      var sig = ""
      if (+arr[1] + scale > 0) {
        sig = "+";
      }
      return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
    }
  }


  return (
    <div className="cart">
      <div className="cart-content">
      { props.cart.length > 0 ? 
        props.cart.map((cartItem, index) => {
          return (
            <div className="product-row" key={index} id={index}>
              <div className="Rtable Rtable--3cols">
                {/*Cart Images */}
                <div className="Rtable-cell order-1">
                  <div className="item-img-container">
                    <img
                      alt={cartItem.product.name}
                      className="item-img"
                      src={cartItem.product.img}
                    />
                  </div>
                </div>
                <div className="Rtable-cell order-2">
                  <p className="text-lg font-bold">{cartItem.product.name}</p>
                </div>
                {/*End Cart Images */}

                {/*Quantities For Each Cart */}
                <div className="Rtable-cell order-1">
                  <select className="select-quantity">
                      <option key={cartItem.quantity} value={cartItem.quantity}>{cartItem.quantity}</option>
                  </select>
                </div>

                {/*End Quantities For Each Cart */}

                {/*Total */}
                <div className="Rtable-cell order-1 final-price">
                  <p>
                    ${roundNumber(parseFloat(cartItem.product.price * cartItem.quantity), 2)}
                  </p>
                </div>
                {/*End total */}
              </div>
              
              <div className='remove-item-btn-container'>
                <button onClick={() =>removeProductFromCart(index)} className="remove-item-button">Remove</button>
              </div>
            </div>
          );
        })
        : <p>No Items In Cart </p>
      }
      </div> 
      <div className = 'checkout-container' >
        <p>
          Total Price: $<span>{props.cart.reduce( (acc, cartItem, index) => {
            acc += roundNumber(parseFloat(cartItem.quantity * cartItem.product.price), 2);
            return acc;
            },0)
          }</span>
        </p> 
          <button onClick = { handleClickCheckout } > Checkout </button> 
        </div> 
      </div>
  );
};

export default Cart;

/*Styled the cart table using this resource
Column Oriented Table
https://codepen.io/team/css-tricks/pen/LNWwzY
https://css-tricks.com/accessible-simple-responsive-tables/
 */
