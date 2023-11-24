import { NavLink } from "react-router-dom";
import hambugerMenu from "../../assets/navbar-toggle-icon.svg";
import logo from "../../assets/logo-right.svg";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const NavMobile = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [start, setStart] = useState("");
  const [growing, setGrowing] = useState("");
  const [height, setHeight] = useState(0);

  const navBarToggle = () => {
    if (!toggleNav) {
      setToggleNav(true);
      setGrowing("growing");

      const timer = setTimeout(() => {
        setStart("start");
        clearTimeout(timer);
      }, 1);
    } else {
      setGrowing("");
      setStart("");
      const timer = setTimeout(() => {
        setToggleNav(false);
        clearTimeout(timer);
      }, 250);
    }
    console.log(toggleNav);
  };

  const closeNav = () => {
    if (toggleNav) {
      setToggleNav(false);
      setGrowing("");
      setStart("");
    }
  };

  return (
    <>
      <div className="nav-mobile d-flex d-xl-none">
        <NavLink to="/" onClick={closeNav}>
          <div className="nav-logo">
            <img
              src={logo}
              alt="Smacky's brand logo with company name placed on the right side"
            />
          </div>
        </NavLink>

        <div>
          <button className="nav-menu d-xl-none d-block" onClick={navBarToggle}>
            <img src={hambugerMenu} alt="hamburger menu icon" />
          </button>
        </div>
      </div>
      {toggleNav && (
        <MobileMenu
          growing={growing}
          start={start}
          height={height}
          closeNav={closeNav}
        />
      )}
    </>
  );
};

export default NavMobile;
