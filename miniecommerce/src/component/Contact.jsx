import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1 className="">Have Some Questions?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center my-5">
            <img src="/assets/images/contact.jpg" alt="Contact" height="200px" />
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleForm" className="form-label">Fullname</label>
                <input type="text" className="form-control" id="exampleForm" placeholder="Yeison Ramirez " />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Write a Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-outline-primary me-4">Send Message</button>
              <img src="/assets/images/imgnavbar.png" alt="About Us" height="70px" width="70px" />
            </form>
          </div>
          <ul className="list-unstyled list-inline">
              <i className="fa fa-whatsapp me-3" aria-hidden="true" style={{ fontSize: '26px' }}></i>
              <i className="fa fa-facebook me-3" aria-hidden="true" style={{ fontSize: '26px' }}></i>
              <i className="fa fa-google me-3" aria-hidden="true" style={{ fontSize: '26px' }}></i>
              <i className="fa fa-twitter me-3" aria-hidden="true" style={{ fontSize: '26px' }}></i>
            </ul>
        </div>
      </div>
    </div>
  )
};

export default Contact;
