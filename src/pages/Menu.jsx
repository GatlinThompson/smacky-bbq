import Header from "../elements/Header";
import Menu from "../components/menu/Menu";

const MenuPage = () => {
  return (
    <main>
      <Header title={"Menu"} addClass={"page-header"} />
      <Menu />
    </main>
  );
};

export default MenuPage;
