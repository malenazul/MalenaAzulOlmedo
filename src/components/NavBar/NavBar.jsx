/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import avion from "./rocket.png";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    // eslint-disable-next-line react/style-prop-object
    <nav id="navBar" className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid navStyle">
        <a className="navbar-brand" href="#">
          TravelFun
        </a>
        <img
          className="imgRock"
          src={avion}
          alt="avion"
          width="3%"
          height="3%"
        />
          <CartWidget/>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link"  to="/">
              Paquetes
              </NavLink>
            </li>
            <li className="nav-item">
            <NavLink className="nav-link"  to="/">
              Vuelos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Alojamientos
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Destinos
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                <a className="dropdown-item" href="#">
                <NavLink className="nav-link"  to="/Category/Europa">
              Europa
              </NavLink>
              </a> 
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  <NavLink className="nav-link"  to="/Category/America">
              America
              </NavLink>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                  <NavLink className="nav-link" to="/Category/Asia">
                Asia
              </NavLink>
                  </a>
                </li>
               
              </ul>
            </li>
          </ul>
        </div>
       
      </div>
    </nav>

  );
}
