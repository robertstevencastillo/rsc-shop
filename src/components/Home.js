import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

// eslint-disable-next-line
import { Fade } from "react-slideshow-image";

// eslint-disable-next-line
import axios from "axios";

const Home = props => {
  // eslint-disable-next-line
  const fadeImages = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwmOF4Q3Ke8BQnDvndI92NHG4U2k0SxghOobdGbwCnrKqieXOc", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTASNxmAD2Epn0PQjoja1K-r3BacYKgCfyHKSypRSB7ho_k2TvJ", "https://cdn.shopify.com/s/files/1/1802/9059/files/VOLCOM-HOME_1024x1024.jpg?v=1549233571"];

  // eslint-disable-next-line
  const slideShowProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: false,
    indicators: true,
  };

  return (
    <div className="home">
      {/*<section className="image-slide-container">
          <Fade {...slideShowProperties}>
            <div className="each-fade">
              <div className="fade-image-container">
                <img alt='fade-1'src={fadeImages[0]} />
              </div>
            </div>
            <div className="each-fade">
              <div className="fade-image-container">
                <img alt='fade-2'src={fadeImages[1]} />
              </div>
            </div>
            <div className="each-fade">
              <div className="fade-image-container">
                <img alt='fade-3'src={fadeImages[2]} />
              </div>
            </div>
          </Fade> 
          
          <div className='feature-image-container'>
            <img alt='feature-item' src='https://cdn.shopify.com/s/files/1/1802/9059/files/VOLCOM-HOME_1024x1024.jpg?v=1549233571' />
          </div> </section>*/}
      {/*<section className="about-us bg-black text-white">
        <h3 className="text-3xl mb-6">Who Are We?</h3>
        <p className="text-lg">We The Culture, define the future and pave the way for the next generation. You each represent RSC Shop in your own unique way, which drives us to move forward as your cultural leaders.</p>
        <br />
        <p className="text-lg">Our clothing and accessories are carefully curated to provide our customers the latest fashions. To keep our customers in style we post new arrivals daily, as well as offer stylist picks to help any indecisive shoppers. Our company is the best place to create the perfect wardrobe. Our top priorities are excellent customer service, exceptionally quick order processing, ultra fast shipping times, and a hassle-free return policy. We value your feedback, whether positive or constructive and we are continuously working to improve your experience.</p>
      </section>{" "}
      */}

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
                <img alt="polo-ralph-lauren" src="https://imgix.ranker.com/user_node_img/92/1820472/original/polo-ralph-lauren-companies-photo-u13?w=87&h=87&fit=crop&crop=faces&q=60&fm=pjpg" />
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
