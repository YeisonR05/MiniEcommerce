import React from "react";
import { NavLink } from "react-router-dom";


const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About Us</h1>
            <p className="lead mb-4">
              Welcome to SHOPPING STORE, your premier online destination for fashion, jewelry, 
              and cutting-edge electronics. We've curated a collection that blends style and innovation, 
              offering the latest trends in clothing for men and women, elegant jewelry pieces, and top-tier
              electronic products. Our commitment is to provide you with 
              high-quality, authentic products, ensuring a seamless shopping experience, backed by exceptional 
              customer service and a dedication to ethical business practices. At SHOPPING STORE, we aspire to 
              be the go-to platform where fashion meets technology, and every purchase is a step towards expressing 
              your unique personality.
               <br/>
              Join us in this exciting retail journey, where quality and customer satisfaction take center stage. 
              Explore our diverse product range and discover the perfect fusion of style and functionality. 
              Thank you for choosing SHOPPING STORE your ultimate shopping destination, where Fashion Meets Technology.
            </p>
            <NavLink to="/contact"className="btn btn-outline-primary px-3">Contact Us</NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center my-5 py-5">
            <img src="/assets/images/about/img1.png" alt="About Us" height="400px" width="400px" />
          </div>
        </div>
      </div>
    </div>
  )
};

export default About;