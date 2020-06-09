import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark sticky-top shadow mb-20">
      <div className="container">
        <a className="navbar-brand" href="#">
          Portfolio
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ml-auto text-white ">
            <div className="nav-item btn">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Home
              </Link>
            </div>
            <div className="nav-item btn">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                About
              </Link>
            </div>
            <div className="nav-item btn">
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
              >
                Skills
              </Link>
            </div>
            <div className="nav-item btn">
              <Link
                activeClass="active"
                to="services"
                spy={true}
                smooth={true}
                offset={-40}
                duration={500}
              >
                Services
              </Link>
            </div>
            <div className="nav-item btn">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
