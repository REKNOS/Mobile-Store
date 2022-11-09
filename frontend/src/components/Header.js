import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import Logout from "./Logout";

// defining the props
const Header = () => {
  

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const {loggedIn, setLoggedIn} = useContext(AppContext);

  const navigate = useNavigate();

  const logout = () => {

      sessionStorage.removeItem('user');

      setLoggedIn(false);

      navigate('/login');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://www.pngitem.com/pimgs/m/207-2075281_clipart-phone-mobile-calling-call-to-mobile-logo.png"
                height="80"
                alt="Mobile store"
                loading="lazy"
              />
            </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/Home">
                Home
              </NavLink>
            </li>
          
            <li className="nav-item">
              <NavLink className="nav-link" to="/signup">
                Signup
              </NavLink>
            </li>
           
            {
              !loggedIn ?
              <li className="nav-item">
                <NavLink className="btn btn-primary" to="/Login">Login Now</NavLink>
              </li>
              :
              <button onClick={logout} className="btn btn-danger">Logout</button>
            }
          </ul>

          

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;