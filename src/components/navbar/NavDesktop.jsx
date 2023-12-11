import logo from "../../assets/logo-bottom.svg";
import { NavLink } from "react-router-dom";
import FancyButton from "../../elements/FancyButton";
import Bag from "../../assets/bag_with_item.svg";

const NavDesktop = (props) => {
  return (
    <>
      <ul className="nav-desktop d-none d-xl-flex">
        <div>
          <li>
            <NavLink to={props.order ? "order" : "menu"}>Menu</NavLink>
          </li>
          <li>
            <NavLink to="rewards">Rewards</NavLink>
          </li>
          <li>
            <NavLink to="/locations">Locations</NavLink>
          </li>

          <li className="nav-brand">
            <NavLink to="/">
              <div className="nav-logo">
                <img
                  src={logo}
                  alt="Smacky's brand logo with company name placed on the bottom"
                />
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login/Signup</NavLink>
          </li>
        </div>
        <li className="desktop-button">
          {!props.order && (
            <FancyButton
              location={"menu"}
              title={"Start Order"}
              addClass={"navbtn"}
            />
          )}

          {props.order && (
            <button className="bag-icon me-5" onClick={props.showCartCanvas}>
              <img src={Bag} style={{ width: "57px", height: "67px" }} />
              <span className="bag-number">1</span>
            </button>
          )}
        </li>
      </ul>
    </>
  );
};

export default NavDesktop;
