import React, { useState } from 'react'

import './Checkout.css'

const Checkout = (props) => {

    // eslint-disable-next-line
    const [name, setName] = useState();
    const [address, setAddress] = useState();
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [zip, setZip] = useState();
    const [ccNumber, setCCNumber] = useState();
    const [ccExpir, setCCExpir] = useState();
    const [ccCCV, setCCCCV] = useState();



    const handleChangeName = (event) => {
        setName(event.target.value)
    }

    const handleChangeAddress = (event) => {
        setAddress(event.target.value)
    }

    const handleChangeCity = (event) => {
        setCity(event.target.value)
    }

    const handleChangeState = (event) => {
        setState(event.target.value)
    }

    const handleChangeZip = (event) => {
        setZip(event.target.value)
    }

    const handleChangeCCNumber = (event) => {
        setCCNumber(event.target.value)
    }

    const handleChangeCCCCV = (event) => {
        setCCCCV(event.target.value)
    }

    const handleChangeCCExpir = (event) => {
        setCCExpir(event.target.value)
    }


    const handleOnClick = () => {
        props.emptyCart();
        props.history.push('/cart')
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
        <div className="checkout">
        <div className='checkout-form-items-container'>
            <form>
                <div className="form-field-container">
                  <label>Name:</label>
                  <input className="input-field" required value={name}onChange={handleChangeName} />
                </div>
                
                 <div className="form-field-container">
                  <label>Address:</label>
                  <input className="input-field" required value={address}onChange={handleChangeAddress} />
                </div>
                
                 <div className="form-field-container">
                  <label>City:</label>
                  <input className="input-field" required value={city}onChange={handleChangeCity} />
                </div>
                
                  <div className="form-field-container">
                  <label>State:</label>
                  <input className="input-field" required value={state}onChange={handleChangeState} />
                </div>
                
                  <div className="form-field-container">
                  <label>Zip:</label>
                  <input className="input-field" required value={zip}onChange={handleChangeZip} />
                </div>

            </form>
                
            <div className='checkout-items'>
                {props.cart.map( (cartItem, cartItemIndex) => {
                    return (
                        <div className='checkout-item' key={cartItemIndex}>
                            <div className="checkout-item-img-container">
                                <img
                                  alt={cartItem.product.name}
                                  className="checkout-item-img"
                                  src={cartItem.product.img}
                                />
                          </div>
                            <p>{cartItem.product.name}</p>
                            <p>Quantity: {cartItem.quantity}</p>
                            <p>${roundNumber(parseFloat(cartItem.product.price * cartItem.quantity), 2)}</p>
                        </div>
                    )
                })}
                <p className='final-price'>
                  Total Price: $<span>{props.cart.reduce( (acc, cartItem, index) => {
                    acc += roundNumber(parseFloat(cartItem.quantity * cartItem.product.price), 2);
                    return acc;
                    },0)
                  }</span>
                </p> 
            </div>

        </div>
        <div className='checkout-payment-info'>
            <div className="form-field-container">
                <label>Card Number:</label>
                <input className="input-field" required value={ccNumber}onChange={handleChangeCCNumber} />
            </div>
            
            <div className="form-field-container">
                <label>Card Expiration:</label>
                <input className="input-field" required value={ccExpir} onChange={handleChangeCCExpir} />
            </div>
            
            <div className="form-field-container">
                <label>CCV Code:</label>
                <input className="input-field" required value={ccCCV}onChange={handleChangeCCCCV} />
            </div>
        </div>
        <div className='pay-button-container'>
            <button onClick={handleOnClick}className='pay-button'>Pay</button>
        </div>
      </div>
    )
}

export default (Checkout);
