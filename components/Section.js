import React from 'react';
import { Carousel } from 'react-bootstrap';
const nbsp = '\u00A0';

export default function Section() {
  return (
    <>
      <div className="introduction">
        <div className="row no-gutters">
          <div className="col-12 order-1 order-lg-2 col-lg-7">
            <Carousel id="carouselExampleRide" data-bs-ride="carousel">
              <Carousel.Item>
                <img src="https://wearespin.com/wp-content/uploads/SPIN-Global-Food-and-Beverage-Retail-20180622115231-1536x1097.jpg" className="d-block w-100" alt="dish" style={{ maxWidth: "100%" }} height="auto" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://wearespin.com/wp-content/uploads/SPIN-Global-Food-and-Beverage-Retail-20180622110012-1536x1097.jpg" className="d-block w-100" alt="dish2" style={{ maxWidth: "100%" }} height="auto" />
              </Carousel.Item>
              <Carousel.Item>
                <img src="https://wearespin.com/wp-content/uploads/SPIN-Global-Food-and-Beverage-Retail-20180622104633-1536x1097.jpg" className="d-block w-100" alt="dish3" style={{ maxWidth: "100%" }} height="auto" />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="col-12 order-2 order-lg-1 col-lg-5">
            <div className="intro-text">
              <div className="heading-small">
                <h4>PANCAKE CAFE®</h4>
              </div>
              <div className="elementor-widget-container">
                <h1 className="elementor-headline e-animated">
                  <span className="elementor-headline-plain-text elementor-headline-text-wrapper">PREPARE TO BE</span>
                  <span className="elementor-headline-dynamic-wrapper elementor-headline-text-wrapper">
                    <span className="elementor-headline-dynamic-text elementor-headline-text-active"> {nbsp}WOWED</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 150" preserveAspectRatio="none">
                      <path d="M7.7,145.6C109,125,299.9,116.2,401,121.3c42.1,2.2,87.6,11.8,87.3,25.7"></path>
                    </svg>
                  </span>
                </h1>
              </div>
              <div className="text">
                <p>Ping pong is a social game and we want our food program to be the same.
                  We offer a wide range of shareable, snackable and delicious offerings
                  that guests can enjoy and easily move between playing and eating.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section2-text">
        <div className="row no-gutters">
          <div className="col-12 order-2 order-lg-2 col-lg-5">
            <div className="text-block">
              <div className="heading-small">
                <h3>INGREDIENTS</h3>
              </div>
              <div className="text">
                We believe that quality ingredients and a 
                creative mind are what’s needed to deliver
                unique and delicious experiences. Every time.
              </div>
            </div>
          </div>
          <div className="col-12 order-1 order-lg-1 col-lg-7">
            <div className="image">
              <img src="https://wearespin.com/wp-content/uploads/SPIN-Menu-Catering-20210614130755.jpg" alt="essen" style={{ maxWidth: "100%", height: "auto" }} />
            </div>
          </div>
        </div>
      </div>

      <div className="section3-text">
        <div className="row no-gutters">
          <div className="col-12 order-2 order-lg-1 col-lg-5">
            <div className="text-block1">
              <div className="heading-small">
                <h3>ETHICAL EATING</h3>
              </div>
              <div className="text">
                We take a farm to table approach using locally sourced and 
                sustainable ingredients whenever possible. We are committed 
                to supporting our local farming communities and giving our 
                guests the best dining experience possible.
              </div>
            </div>
          </div>
          <div className="col-12 order-1 order-lg-2 col-lg-7">
            <img src="https://wearespin.com/wp-content/uploads/SPIN_Social-0180622134507.jpg" alt="menschen" style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        </div>
      </div>

      <div className="section4-text">
        <div className="row no-gutters">
          <div className="col-12 order-2 order-lg-2 col-lg-5">
            <div className="text-block">
              <div className="heading-small">
                <h3>OUR KITCHEN</h3>
              </div>
              <div className="text">
                Our menu will surprise and delight while providing
                you with the perfect fuel to pong the night away.
              </div>
              <div className="venue-select-reserve">
                <div className="venue-select">
                  <select name="VENUE" id="venue-event" required="required" aria-required="true">
                    <option value="">SELECT VENUE</option>
                    <option value="HCM">HO CHI MINH CITY</option>
                  </select>
                </div>
                <div className="fuction-box color-event color">
                  <form action="booking.html">
                    <button className="btn-party color-text" type="submit">RESERVE NOW</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 order-1 order-lg-1 col-lg-7">
            <img src="https://wearespin.com/wp-content/uploads/SPIN-Washington-DC-Food-and-Beverage-20181217160758.jpg" alt="pizza" style={{ maxWidth: "100%", height: "auto" }} />
          </div>
        </div>
      </div>
    </>
  );
}
