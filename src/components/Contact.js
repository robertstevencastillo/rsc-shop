import React, { useState } from "react";
import "./Contact.css";

const Contact = props => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [textMessage, setTextMessage] = useState();

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const handleTextAreaChange = event => {
    setTextMessage(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log("Form Submitted!");
  };

  return (
    <div className="contact">
      <form className="form-field-container contact-form" onSubmit={handleFormSubmit}>
        <h3>Questions? Comments? Send us a message below and we'll do our best to get back right away.</h3>

        <div className="name-email">
          <div>
            <label>Name</label>
            <br />
            <br />
            <input onChange={handleNameChange} value={name} className="input-field" type="text" placeholder="Name" />
          </div>

          <div>
            <label>Email</label>
            <br />
            <br />
            <input onChange={handleEmailChange} value={email} className="input-field" type="text" placeholder="Email" />
          </div>
        </div>

        <div className="text-area-message-container">
          <label>Message</label>
          <br />
          <br />
          <textarea onChange={handleTextAreaChange} value={textMessage} className="text-area-message" placeholder="Type message here..." />
        </div>

        <div className="button-container">
          <input type="submit" className="submit-message-btn" value="Send Message" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
