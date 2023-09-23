import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-light text-dark pt-4 pb-4">
        <div className="container text-center text-md-start">
          <div className="row text-center text-md-start">
            <div className="col-md-6 col-lg-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Nosotros</h5>
              <hr className="mb-4" />
              <p>
                SHOPPING STORE where fashion meets technology.
                Explore our high-quality, stylish products and express your unique
                personality through every purchase. Thank you for choosing us as your
                ultimate shopping destination.
              </p>
            </div>
            <div className="col-md-6 col-lg-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Section</h5>
              <hr />
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-dark">Home</a></li>
                <li className="nav-item mb-2"><a href="/products" className="nav-link p-0 text-dark">Products</a></li>
                <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 text-dark">About</a></li>
                <li className="nav-item mb-2"><a href="/contact" className="nav-link p-0 text-dark">Contact</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 mx-auto mt-3">
              <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Contact</h5>
              <hr />
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="/" className="nav-link p-0 text-dark">Buga, Colombia</a></li>
                <li className="nav-item mb-2"><a href="/contact" className="nav-link p-0 text-dark">shoppingstore@gmail.com</a></li>
                <li className="nav-item mb-2"><a href="/contact" className="nav-link p-0 text-dark">+57 3225059783</a></li>
                <li className="nav-item mb-2"><a href="/contact" className="nav-link p-0 text-dark">+5535231</a></li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 mx-auto mt-4">
              <div className="d-flex flex-column justify-content-between my-4">
                <hr/>
                <div className="mx-auto">
                <img src="/assets/images/imgnavbar.png" alt="About Us" height="100px" width="100px" />
                </div>
                <ul className="list-unstyled list-inline mx-auto">
                  <li className="list-inline-item"><i className="fa fa-whatsapp" aria-hidden="true" style={{ fontSize: '26px' }}></i></li>
                  <li className="list-inline-item"><i className="fa fa-facebook" aria-hidden="true" style={{ fontSize: '26px' }}></i></li>
                  <li className="list-inline-item"><i className="fa fa-google" aria-hidden="true" style={{ fontSize: '26px' }}></i></li>
                  <li className="list-inline-item"><i className="fa fa-twitter" aria-hidden="true" style={{ fontSize: '26px' }}></i></li>
                </ul>
                <p>© 2023 Company, Inc. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
