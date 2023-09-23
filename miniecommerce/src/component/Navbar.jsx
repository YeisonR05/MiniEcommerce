import React from "react";
import { NavLink } from "react-router-dom";
import Login from "./Buttons/Login";
import Signup from "./Buttons/Signup";
import CartBtn from "./Buttons/CartBtn";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg shadow-sm py-3" style={{ backgroundColor: '#e3f2fd' }}>
        <div className="container-fluid mt-1">

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0 fw-bold text-primary">
            <img className="me-2" src="/assets/images/imgnavbar.png" alt="About Us" height="45px" width="45px" style={{ cursor: 'pointer' }}/>
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Product</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="contact">Contact</NavLink>
              </li>
            </ul>
            <NavLink className="navbar-brand mx-auto fw-bold fs-4" to="/">
              SHOPPING STORE
            </NavLink>
            <Login />
            <Signup />
            <CartBtn />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;