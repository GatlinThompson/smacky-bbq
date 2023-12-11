import Header from "../elements/Header";
import Menu from "../components/menu/Menu";
import { useEffect, useContext } from "react";
import UserContext from "../store/user-context";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Smacky's | Menu";
    if (userCtx.order) {
      navigate("order");
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <main>
        <Header title={"Menu"} addClass={"page-header"} />
        <Menu />
      </main>
    </>
  );
};

export default MenuPage;
