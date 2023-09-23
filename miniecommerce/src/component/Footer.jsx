import React from "react";


const Footer = () => {
  return (
    <>
      <footer className="bg-light text-dark pt-4 pb-4">
        <div className="container text-center text-md-start">
          <div className="row text-center text-md-start">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
              <h5 className="text uppercase mb-4 font-weight-bold text-primary">Nosotros</h5>
              <hr className="mb-4" />
              <p>
                SHOPPING STORE where fashion meets technology.
                Explore our high-quality, stylish products and express your unique
                personality through every purchase. Thank you for choosing us as your
                ultimate shopping destination.
              </p>
            </div>
            <div className="col-md-2 col-lg-2 col-x1-2 mx-auto mt-3">
              <div class="col-6 col-md-2 mb-3">
                <h5 className="text uppercase mb-4 font-weight-bold text-primary">Section</h5>
                <hr />
                <ul class="nav flex-column ">
                  <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-dark">Home</a></li>
                  <li class="nav-item mb-2"><a href="/products" class="nav-link p-0 text-dark">Products</a></li>
                  <li class="nav-item mb-2"><a href="/about" class="nav-link p-0 text-dark">About</a></li>
                  <li class="nav-item mb-2"><a href="/contact" class="nav-link p-0 text-dark">Contact</a></li>
                </ul>
              </div>
            </div>
            <div class="col-6 col-md-2 mb-3 mt-3">
              <h5 className="text uppercase mb-4 font-weight-bold text-primary">Contact</h5>
              <hr />
              <ul class="nav flex-column ">
                <li class="nav-item mb-2 "><a href="/" class="nav-link p-0 text-dark">Buga, Colombia</a></li>
                <li class="nav-item mb-2"><a href="/contact" class="nav-link p-0 text-dark">shoppingstore@gmail.com</a></li>
                <li class="nav-item mb-2"><a href="/contact" class="nav-link p-0 text-dark">+57 3225059783</a></li>
                <li class="nav-item mb-2"><a href="/contact" class="nav-link p-0 text-dark">+5535231</a></li>
              </ul>
            </div>
          </div>
          <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>© 2023 Company, Inc. All rights reserved.</p>
            <img src="/assets/images/imgnavbar.png" alt="About Us" height="100px" width="100px" />
            <ul className="list-unstyled list-inline">
              <i className="fa fa-whatsapp me-3" aria-hidden="true" style={{ fontSize: '26px' }}></i>
              <i className="fa fa-facebook me-3" aria-hidden="true" style={{ fontSize: '26px' }}></i>
              <i className="fa fa-google me-3" aria-hidden="true" style={{ fontSize: '26px' }}></i>
              <i className="fa fa-twitter me-3" aria-hidden="true" style={{ fontSize: '26px' }}></i>
            </ul>

          </div>
        </div>
      </footer>
    </>
  )
};

export default Footer;