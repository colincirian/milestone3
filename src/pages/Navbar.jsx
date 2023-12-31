import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import devdataImage from "../images/devdata.png";
import 'font-awesome/css/font-awesome.min.css';
import "../styles/navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const closeMenu = () => {
    const navElement = document.getElementById("navbarNav");
    if (navElement.classList.contains("show")) {
      navElement.classList.remove("show");
    }
  };

  const handleLogout = async (e) => {
    e.prevent.default();
  };

  return (
    <div className="nav-div">
      <Link to={"/"}>
        <img className="logo" src={devdataImage} />
      </Link>
      <nav className="navbar navbar-expand-lg">
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="centered-nav-items">
            <ul className="navbar-nav">

            <li className="nav-item ml-auto">
                <Link to={"/projects"}>
                  <button className="link-btn">Projects</button>
                </Link>
              </li>

              <li className="nav-item ml-auto">
                <Link to={"/events"}>
                  <button className="link-btn">Events</button>
                </Link>
              </li>
              
              <li className="nav-item ml-auto">
                <Link to={"/login"}>
                  <button className="link-btn">Login</button>
                </Link>
              </li>

              <li className="nav-item ml-auto">
                <Link to={"/signout"}>
                  <button className="link-btn">Sign Out</button>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
