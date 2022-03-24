import React ,{useEffect}from "react";
import { NavLink } from "react-router-dom";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import * as themeActions from "../reduxdark/actiondark/Darktype";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
    const dispatch = useDispatch();
    const themeReducer = useSelector((themeReducer) => themeReducer.Darkreducer);
    let { theme } = themeReducer;
    
    const switchDarkMode = () => {
        // themeReducer.Darkreducer.theme
        theme
          ? dispatch(themeActions.Darkcreatot(false))
          : dispatch(themeActions.Darkcreatot(true));
      };
      useEffect(() => {
        //changing color of body with darkmode in useEffect
        document.body.style.backgroundColor = theme ? "black" : "#fff";
        document.body.style.color = theme ? "white" : "black";

      }, [theme]);
  return (
    <>
      <nav className={`navbar navbar-expand-lg   navbar-light ${theme ? 'darknav'  : 'bgColor'}`} >
        <div className="container-fluid">
          <NavLink className={` ${theme ? 'darknavnavbar-brand' : 'navbar-brand' }`}  to="#"  >
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  exact
                  className="nav-link"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/about"
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/projects"
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/services"
                >
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  activeClassName="menu_active"
                  className="nav-link"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <label class="switch mt-2" >
                  <input type="checkbox" 
                  checked={theme}
                  onChange={switchDarkMode}
                   />
           
                  <span class="slider round">
                  <BsMoonStarsFill color="white" style={{fontSize:"27px",paddingLeft:'5px',paddingTop:'5px'}}/>
          <BsFillSunFill color="yellow"  style={{fontSize:"30px",paddingLeft:'4px',paddingTop:'5px'}}/>
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
