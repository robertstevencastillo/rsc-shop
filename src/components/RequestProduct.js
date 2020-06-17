import React, { useState } from "react";
import "./RequestProduct.css";

/*URL slugs are the exact address of a specific website. A slug is a URL-friendly version of a repository name
for example, we can't search for nba.com/lakers/lebron james - that wouldn't work, because you can't have a space in a url string.
Slugify takes a str, and turns it into a proper url slug string; which is a string with no spaces, and each word is seperated by a dash.
 */
const slugify = str => {
  str = str || "";
  const a =
    "àáäâèéëêìíïîòóöôùúüûñçßÿœæŕśńṕẃǵǹḿǘẍźḧ·/_,:;άαβγδεέζήηθιίϊΐκλμνξοόπρσςτυϋύΰφχψωώ";
  const b =
    "aaaaeeeeiiiioooouuuuncsyoarsnpwgnmuxzh------aavgdeeziitiiiiklmnxooprsstyyyyfhpoo";
  const p = new RegExp(a.split("").join("|"), "g");

  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/ου/g, "ou")
    .replace(/ευ/g, "eu")
    .replace(/θ/g, "th")
    .replace(/ψ/g, "ps")
    .replace(/\//g, "-")
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special chars
    .replace(/&/g, "-and-") // Replace & with 'and'
    // eslint-disable-next-line
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    // eslint-disable-next-line
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};

const RequestProduct = props => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [product_link, setLink] = useState();
  const [product_desc, setDescription] = useState();
  const [img, setImage] = useState();
  const [avg_rating, setRating] = useState();
  const [category, setCategory] = useState();

  const handleChangeName = event => {
    setName(event.target.value);
  };

  const handleChangePrice = event => {
    setPrice(event.target.value);
  };

  const handleChangeLink = event => {
    setLink(event.target.value);
  };

  const handleChangeDescription = event => {
    setDescription(event.target.value);
  };

  const handleChangeImage = event => {
    setImage(event.target.value);
  };

  const handleChangeRating = event => {
    setRating(event.target.value);
  };

  const handleChangeCategory = event => {
    setCategory(event.target.value);
  };

  const addProduct = event => {
    event.preventDefault();
    props.addProduct({
      name,
      img,
      product_link,
      price,
      avg_rating,
      product_desc,
      category,
      url_slug: slugify(name)
    });
    //Shorthand way of writing name:name, price:price, etc. if the obj property and value,
    //have the same name, then you can just write, name, description, etc.

    //The Route component's render prop, has a method called history, which allows you to to a previous page
    //You are required to push a route to history in order for it to work.
    props.history.push("/");
  };
  return (
    <div>
      <form className="request-product-form mt-4" onSubmit={addProduct}>
        <div className="form-field-container">
          <label>Product Name:</label>
          <input className="input-field" required onChange={handleChangeName} />
        </div>
        <div className="form-field-container">
          <label>Product Image URL:</label>
          <input
            className="input-field"
            required
            onChange={handleChangeImage}
          />
        </div>
        <div className="form-field-container">
          <label>Product Link:</label>
          <input className="input-field" required onChange={handleChangeLink} />
        </div>
        <div className="form-field-container">
          <label>Price in $:</label>
          <input
            className="input-field"
            required
            onChange={handleChangePrice}
          />
        </div>
        <div className="form-field-container">
          <label>Rating:</label>{" "}
          <textarea
            className="input-field"
            required
            onChange={handleChangeRating}
          />
        </div>

        <div className="form-field-container">
          <label>Description:</label>{" "}
          <textarea
            className="input-field"
            required
            onChange={handleChangeDescription}
          />
        </div>
        <div className="form-field-container">
          <label>Category:</label>
          <select onChange={handleChangeCategory}>
            <option />
            {props.categories.map((category, index) => {
              return (
                <option key={index} value={category}>
                  {category.charAt(0).toUpperCase() +
                    category.slice(1, category.length)}
                </option>
              );
            })}
          </select>
        </div>

        <input type="submit" value="Add" className="button" />
      </form>
    </div>
  );
};

export default RequestProduct;
