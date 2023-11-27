import Header from "../elements/Header";
import Menu from "../components/menu/Menu";
import { useEffect } from "react";

const MenuPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return (
    <main>
      <Header title={"Menu"} addClass={"page-header"} />
      <Menu />
    </main>
  );
};

export default MenuPage;
