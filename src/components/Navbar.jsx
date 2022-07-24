import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <div>

      <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <div class="container">
          <NavLink class="navbar-brand" to="/products">LOGO</NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/product">Product</NavLink>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
            <form class="d-flex">
              <button class="btn btn-outline-dark me-2" type="submit">Login</button>
              <button class="btn btn-outline-success" type="submit">Signup</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;