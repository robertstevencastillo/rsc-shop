import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="footer-items-container">
        <ul>
          <li className="mb-4 text-xl font-bold	">Customer Service</li>
          <li>Returns & Exchanges</li>
          <li>Faq</li>
          <li>Contact Us</li>
        </ul>
        <ul>
          <li className="mb-4 text-xl font-bold	">Support</li>
          <li>Cookie Policy</li>
          <li>Terms & Conditions</li>
          <li>Privacy Statement</li>
        </ul>

        <ul className="footer-desc">
          <li className="mb-4 text-xl font-bold">RSC Shop</li>
          <li>
            <span>
              Our top priorities are excellent customer service, exceptionally quick order processing, ultra fast shipping times, and a hassle-free return policy. We value your feedback, whether positive or constructive and we are continuously working to improve your experience.
            </span>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

/*This idea to create a footer component to keep at the bottom of the page, and render the App and Footer together was created by this article
https://medium.com/@stefanmaretic/react-sticky-footer-f842d5fbd68
 */
