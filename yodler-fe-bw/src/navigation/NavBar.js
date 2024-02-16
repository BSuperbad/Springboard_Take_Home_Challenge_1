import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {

    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container d-flex flex-column align-items-center">
        <div className="collapse navbar-collapse" id="navbarNav">
            <p className="nav-item">
              <NavLink className="nav-link" to="/">Home |</NavLink>
            </p>
            
            <p className="nav-item">
              <NavLink className="nav-link" to="/signup">| Sign Up |</NavLink>
            </p>
            <p className="nav-item">
              <NavLink className="nav-link" to="/admin">| Admin </NavLink>
            </p>
        </div>
        </div>
      </nav>
    );
  };


export default NavBar;




