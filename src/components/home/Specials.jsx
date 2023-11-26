import Header from "../../elements/Header";
import SpecialItem from "./SpecialItem";
import menu from "../../store/menu";

const Specials = () => {
  const specials = menu.filter((item) => item.special === true);
  return (
    <section id="specials">
      <Header title={"Daily Specials"} />
      <ul className="specials">
        {specials.map((item) => (
          <SpecialItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
};

export default Specials;
