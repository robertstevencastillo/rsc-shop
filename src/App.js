import React, { useState, useEffect } from "react";
import axios from "axios";
//import ReactDOM from "react-dom";
import "./App.css";
import Home from "./components/Home.js";
import RequestProduct from "./components/RequestProduct.js";
import Product from "./components/Product.js";
import ProductsList from "./components/ProductsList.js";
import Contact from "./components/Contact.js";
import Cart from "./components/Cart.js";
import Error from "./components/Error";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
// eslint-disable-next-line
import Checkout from "./components/Checkout.js";

const App = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("/../data.json")
      .then(response => {
        /*Initialize Products */
        const productsFromLocalStorage = JSON.parse(localStorage.getItem("products"));
        const updatedProducts = [...response.data.products];

        /*If there are products in local storage, then assign that to our products state
        variable. It they're aren't, then it will evaluate to false, and assign the 
        products from our json file to local storage.  */
        setProducts(productsFromLocalStorage || updatedProducts);

        //Initialize Cart
        const cartFromLocStorage = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = [...cartFromLocStorage];
        setCart(updatedCart);

        //Initialize Categories
        const updatedCategories = response.data.categories.map(category => category);
        setCategories(updatedCategories);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const addProduct = product => {
    const updatedProducts = [...products, product];
    setProducts(updatedProducts);
    localStorage.setItem("products", JSON.stringify(updatedProducts));
  };

  const addToCart = ({ product, quantity }) => {
    /*If the product is already existing in the cart, based on its slug, 
    we increment its quantity. Otherwise, we add it as a new element. */
    const index = cart.findIndex(itemInCart => itemInCart.product.url_slug === product.url_slug);

    let newCart = [];

    //If product not in cart, then index will return -1
    if (index === -1) {
      newCart = [...cart, { product, quantity }];
    } else {
      quantity += cart[index].quantity;
      newCart = cart.filter(item => item.product.url_slug !== product.url_slug).concat({ product, quantity });
    }
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  const deleteProductFromCart = index => {
    const updatedCart = cart.slice(0, index).concat(cart.slice(index + 1, cart.length));
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const emptyCart = () => {
    let updatedCart = [...cart];
    const cartLength = updatedCart.length;
    for (let x = 0; x < cartLength; x++) {
      updatedCart.pop();
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <Router>
      <div className="app">
        <div className="site-flex-container">
          <div className="app-store-title">
            <h1>RSC Shop</h1>
          </div>
          {/*Header */}
          <nav>
            <ul>
              <li className="home-nav-link-li text-lg">
                <Link className="link" to={"/"}>
                  Home
                </Link>
              </li>

              <li className="request-product-nav-link-li text-lg">
                <Link className="link" to={"/add-product"}>
                  Add Product
                </Link>
              </li>
              <li className="products-list-nav-link-li text-lg">
                <Link className="link" to={"/products-list"}>
                  Products List
                </Link>
              </li>
              <li className="contact-nav-link-li text-lg">
                <Link className="link" to={"/contact"}>
                  Contact
                </Link>
              </li>
              <li className="cart-nav-link-li text-md ">
                <Link className="link" to={"/cart"}>
                  Cart{cart.length > 0 ? <sup>{cart.length}</sup> : <sup />}
                </Link>
              </li>
            </ul>
          </nav>
          <Link to="/checkout" />
          {/*End Header */}

          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/add-product" render={({ history }) => <RequestProduct categories={categories} addProduct={addProduct} history={history} />} />
              <Route path="/products-list" render={({ history }) => <ProductsList categories={categories} products={products} history={history} />} />
              <Route path="/product/:url_slug" render={({ history, match }) => <Product product={products.find(p => p.url_slug === match.params.url_slug)} addToCart={addToCart} history={history} />} />
              <Route path="/contact" component={Contact} />
              <Route path="/cart" render={({ history }) => <Cart history={history} cart={cart} deleteProductFromCart={deleteProductFromCart} />} />
              <Route path="/checkout" render={({ history }) => <Checkout emptyCart={emptyCart} history={history} cart={cart} />} />
              <Route component={Error} />
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
