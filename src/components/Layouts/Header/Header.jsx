import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Header.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { TbMessage } from "react-icons/tb";
import { HiX } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(e.target) &&
      sidebarOpen
    ) {
      setSidebarOpen(false);
    }
  };

  useEffect(() => {
    const handaleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };
    handaleResize();

    window.addEventListener("resize", handaleResize);
    return () => window.removeEventListener("resize", handaleResize);
  }, []);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container ">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            src="https://ahaansoftware.com/uploadedimage/asc.png"
            alt="logo"
            className="asc-logo"
          />
        </a>

        <div className="header-left-side d-flex align-items-center">
          <ul className="d-flex  desktop-nav-menu">
            <li>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/about">
                About us
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/service">
                Services
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="/industry">
                Industry
              </Link>
            </li>
            <li className="nav-item ">
              <Link
                className="nav-link "
                to="https://portfolio.ahaansoftware.com/"
              >
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
        <div className="header-left-side">
          <div className="get-quote-container-1">
            {isMobile ? (
              <a href="/contact" style={{padding:0}}>
                <TbMessage size={35} className="phone-get-qt" />
              </a>
            ) : (
              <a href="/contact" className=" get-quote-btn">
                Get a Quote
              </a>
            )}
          </div>
          <button
            className="asc-header-toggle"
            type="button"
            onClick={toggleSidebar}
          >
            <HiMenuAlt3 size={40} color="#000" />
          </button>

          <div
            className={`mobile-sidebar ${sidebarOpen ? "open" : ""}`}
            ref={sidebarRef}
          >
            <button className="close-btn" onClick={() => setSidebarOpen(false)}>
              <HiX size={30} color="#000" />
            </button>
            <div className="sidebar-content">
              <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About us</Link>
                <Link to="/service">Services</Link>
                <Link to="/industry">Industry</Link>
                <Link to="https://portfolio.ahaansoftware.com/">Portfolio</Link>
              </div>
              <hr />
              <div className="social-links">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF size={30} color="#CC9331" style={{backgroundColor:"#000", padding:7, borderRadius:50}} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram size={30} color="#CC9331" style={{backgroundColor:"#000", padding:7, borderRadius:50}} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn size={30} color="#CC9331" style={{backgroundColor:"#000", padding:7, borderRadius:50}} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="get-quote-container-2">
          <a href="/contact" className="get-quote-btn">
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
