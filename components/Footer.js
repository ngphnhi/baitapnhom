import React from 'react';
import instagramLogo from '../assets/instagram.svg';
import facebookLogo from '../assets/facebook.svg';
import twitterLogo from '../assets/twitter.svg';
import youtubeLogo from '../assets/youtube.svg';

const Footer = () => {
  return (
    <footer className="mt-5 bg-custom">
      <div className="container">
        <div className="row py-5">
          <div className="col-4 d-flex flex-column align-items-end justify-content-center text-end">
            <h2 className="text-uppercase">
              join our<br />mailing list
            </h2>
          </div>
          <div className="col-8 d-flex align-items-center pr-3">
            <form className="w-75">
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control text-uppercase no-border" 
                  placeholder="your email address" 
                  aria-label="Email Address" 
                />
                <button 
                  className="btn btn-custom text-uppercase no-border ms-2" 
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 d-flex flex-column align-items-center">
            <p className="lead text-uppercase">connect</p>
            <div className="social-links">
              <a href="#" className="social-link">
                <img src={instagramLogo} alt="Instagram" />
                <span className="social-text">Instagram</span>
              </a>
              <a href="#" className="social-link">
                <img src={facebookLogo} alt="Facebook" />
                <span className="social-text">Facebook</span>
              </a>
              <a href="#" className="social-link">
                <img src={twitterLogo} alt="Twitter" />
                <span className="social-text">Twitter</span>
              </a>
              <a href="#" className="social-link">
                <img src={youtubeLogo} alt="YouTube" />
                <span className="social-text">YouTube</span>
              </a>
            </div>
          </div>
          <div className="col-6 d-flex flex-column align-items-center">
            <p className="lead text-uppercase">more about us</p>
            <div className="social-links">
              <a href="#" className="social-link">
                <i className="bi bi-question-circle-fill"></i>
                <span className="social-text">FAQ'S</span>
              </a>
              <a href="#" className="social-link">
                <i className="bi bi-info-circle-fill"></i>
                <span className="social-text text-uppercase">about us</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
