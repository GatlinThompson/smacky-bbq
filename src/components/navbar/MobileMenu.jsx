import { NavLink } from "react-router-dom";
import FancyButton from "../../elements/FancyButton";

const MobileMenu = (props) => {
  return (
    <div
      className={`nav-mobile-menu d-xl-none d-block ${props.growing} ${props.start}`}
    >
      <ul>
        <li>
          <NavLink to="menu" onClick={props.closeNav}>
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={props.closeNav}>
            Rewards
          </NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={props.closeNav}>
            Locations
          </NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={props.closeNav}>
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={props.closeNav}>
            Login/Signup
          </NavLink>
        </li>
        {!props.order && (
          <li className="nav-button" onClick={props.closeNav}>
            <FancyButton
              location={"menu"}
              title={"Start Order"}
              addClass={"navbtn"}
            />
          </li>
        )}
      </ul>
    </div>
  );
};

export default MobileMenu;
