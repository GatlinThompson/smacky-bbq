import { NavLink } from "react-router-dom";
import hambugerMenu from "../../assets/navbar-toggle-icon.svg";
import logo from "../../assets/logo-right.svg";
import MobileMenu from "./MobileMenu";
import { useState } from "react";
import Bag from "../../assets/bag_with_item.svg";

const NavMobile = (props) => {
  const [toggleNav, setToggleNav] = useState(false);
  const [start, setStart] = useState("");
  const [growing, setGrowing] = useState("");

  const navBarToggle = () => {
    if (!toggleNav) {
      setToggleNav(true);
      setGrowing("growing");

      const timer = setTimeout(() => {
        if (props.order) {
          setStart("start ordered");
        } else {
          setStart("start");
        }

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

  const showCartCanvas = () => {
    props.showCartCanvas;
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

        <div className="d-flex">
          {props.order && (
            <button className="bag-icon me-1" onClick={props.showCartCanvas}>
              <img src={Bag} style={{ width: "27px", height: "29px" }} />
              <span className="bag-number">1</span>
            </button>
          )}
          <button className="nav-menu d-xl-none d-block" onClick={navBarToggle}>
            <img src={hambugerMenu} alt="hamburger menu icon" />
          </button>
        </div>
      </div>
      {toggleNav && (
        <MobileMenu
          growing={growing}
          start={start}
          closeNav={closeNav}
          order={props.order}
        />
      )}
    </>
  );
};

export default NavMobile;
