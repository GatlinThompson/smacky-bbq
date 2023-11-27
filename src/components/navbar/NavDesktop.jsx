import logo from "../../assets/logo-bottom.svg";
import { NavLink } from "react-router-dom";
import FancyButton from "../../elements/FancyButton";

const NavDesktop = () => {
  return (
    <>
      <ul className="nav-desktop d-none d-xl-flex">
        <div>
          <li>
            <NavLink to="menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/">Rewards</NavLink>
          </li>
          <li>
            <NavLink to="/">Locations</NavLink>
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
            <NavLink to="/">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/">Login/Signup</NavLink>
          </li>
        </div>
        <li className="desktop-button">
          <FancyButton
            location={"menu"}
            title={"Start Order"}
            padding={"0 1rem"}
          />
        </li>
      </ul>
    </>
  );
};

export default NavDesktop;
