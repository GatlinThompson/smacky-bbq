import Header from "../elements/Header";
import Menu from "../components/menu/Menu";
import { useEffect, useContext } from "react";
import UserContext from "../store/user-context";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const MenuPage = () => {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (userCtx.order) {
      navigate("order");
    }
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Smacky's | Menu</title>
      </Helmet>
      <main>
        <Header title={"Menu"} addClass={"page-header"} />
        <Menu />
      </main>
    </>
  );
};

export default MenuPage;
