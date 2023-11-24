import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const NavBar = () => {
  return (
    <nav className="nav">
      {/**Brand Icon**/}
      <NavDesktop />
      <NavMobile />
    </nav>
  );
};

export default NavBar;
