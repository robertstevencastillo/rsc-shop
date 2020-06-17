import React, { useState, useEffect } from "react";
import "./ProductsList.css";

const ProductsList = props => {
  const [category, setCategory] = useState();

  const handleChange = event => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    setCategory("all");
  }, []);

  return (
    <div className="products">
      <select
        className="p-4 border-black border-solid border-2 mb-4 mt-4"
        onChange={handleChange}
      >
        <option value="all">All</option>
        {props.categories.map((category, index) => {
          return (
            <option key={index} value={category}>
              {category.charAt(0).toUpperCase() +
                category.slice(1, category.length)}{" "}
            </option>
          );
        })}
      </select>

      <section className="products-listing-container">
        {category === "all"
          ? props.products.map((product, index) => {
              return (
                <div
                  className="product-listing mt-5 mb-5"
                  key={`${index}-${product.category}-${product.name}`}
                  onClick={() =>
                    props.history.push("/product/" + product.url_slug)
                  }
                >
                  <p>
                    <img alt={product.name} src={product.img} />
                  </p>
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                </div>
              );
            })
          : props.products
              .filter((product, index) => {
                return product.category === category;
              })
              .map((product, index) => {
                return (
                  <div
                    className="product-listing mt-5 mb-5"
                    key={`${index}-${product.category}-${product.name}`}
                    onClick={() =>
                      props.history.push("/product/" + product.url_slug)
                    }
                  >
                    <p>
                      <img alt={product.name} src={product.img} />
                    </p>
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                  </div>
                );
              })}
      </section>
    </div>
  );
};

export default ProductsList;
