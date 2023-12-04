import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
import UserContext from "../../store/user-context";
import { useContext, useEffect, useState } from "react";

const NavBar = (props) => {
  const userCtx = useContext(UserContext);
  const [order, setOrder] = useState(false);

  useEffect(() => {
    setOrder(userCtx.order);
  }, [userCtx.order]);

  return (
    <nav className="nav">
      {/**Brand Icon**/}
      <NavDesktop order={order} showCartCanvas={props.showCartCanvas} />
      <NavMobile order={order} showCartCanvas={props.showCartCanvas} />
    </nav>
  );
};

export default NavBar;
