import menu from "../../store/menu";

const Menu = () => {
  const catergories = [...new Set(menu.map((catergory) => catergory.type))];

  console.log(catergories);
  return (
    <section className="container" id="search-bar">
      \
    </section>
  );
};

export default Menu;
