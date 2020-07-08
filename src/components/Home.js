import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = props => {
  return (
    <div className="home">
      <section className="welcome">
        <Link to={"/products-list"}>
          <button className="welcome-shop-now-btn">Shop Now</button>
        </Link>
      </section>

      <section className="latest-blogs-container mt-4 mb-4">
        <h2 className="text-3xl mb-2">Check Out Our Latest Blogs</h2>
        <section className="latest-blogs">
          <ul>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://cordmagazine.com/fashion/top-ten-best-selling-clothing-fashion-brands-world/">
                <img alt="polo-ralph-lauren" src="https://corporate.ralphlauren.com/on/demandware.static/-/Sites-RalphLauren_Corporate-Library/default/dw90e12bbe/assets/images/PRESS_RELEASES/081219_PoloDenim.jpg" />
              </a>
              <p className="text-lg">The best clothing brand?</p>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.thebalancesmb.com/starting-own-business-1200678">
                <img alt="starting-business" src="https://www.thebalancesmb.com/thmb/Qm7QN82AlNhka7VvrSFVnByqeZM=/300x200/filters:saturation(0.2):brightness(10):contrast(5):no_upscale():format(webp)/7StepstoStartingYourOwnBusinessQuicklyandEffectively-5a2067ecb39d03003929ccde.jpg" />
              </a>
              <p className="text-lg">7 steps to starting your own business</p>
            </li>
            <li>
              <a target="_blank" rel="noopener noreferrer" href="https://www.forbes.com/sites/forbescoachescouncil/2018/10/10/essential-tips-for-growing-your-brand/#51ed873e3c56">
                <img alt="growing-business" src="https://www.thebalancesmb.com/thmb/WaAk9ogsA_mH4yIvMM7tnZBjF_M=/300x200/filters:saturation(0.2):brightness(10):contrast(5):no_upscale():format(webp)/personal_branding-853254044-5a88c5613de42300373b957a.jpg" />{" "}
              </a>
              <br />
              <p className="text-lg">Essential Tips For Growing Your Brand</p>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};

export default Home;

/* 
React Slide Show
https://github.com/femioladeji/react-slideshow
*/
