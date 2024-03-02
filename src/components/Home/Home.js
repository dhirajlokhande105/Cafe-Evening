import { Navbar } from "../Navbar"
import banner1 from "../../images/main-bg1.jpg"
import banner3 from "../../images/cafe-evening-banner3.jpg"
import banner2 from "../../images/cafe-evening-banner2.jpg"
import welcomebanner from "../../images/welcome-image.jpg"



import "./index.css"
import { useState } from "react"
import Welcome from "../Welcome/Welcome"
import Offers from "../Offers/Offers"
import InnerBanner from "../InnerBanner/InnerBanner"



export const Home = () => {

  return (

    <div className="home-container">
      <Navbar />
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner h-80">
          <div className="carousel-item banner1 active">

            <img src={banner1} className="d-block w-100 main-img" alt="..." />
            <div class="carousel-caption main-text">
              <p>The Cafe Evening</p>
              <p>Where every bite feels like paradise</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner2} className="d-block w-100 img" alt="..." />
            <div class="carousel-caption d-none d-md-block top-0 mt-3">
              <h1>First slide label</h1>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={banner3} className="d-block w-100 img" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon " aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Welcome />
      <InnerBanner />
      <Offers />


    </div>
  );

}


