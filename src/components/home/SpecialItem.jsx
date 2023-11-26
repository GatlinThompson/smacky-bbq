import pic from "../../assets/Barebones Burger.png";

import FancyButton from "../../elements/FancyButton";

const SpecialItem = (props) => {
  return (
    <li>
      <div className="mx-auto">
        <img src={`/src/assets/${props.item.title}.png`} />
      </div>
      <div className="mx-auto">
        <p className="header text-center special-title">{props.item.title}</p>
        <div className="special-text">
          <p>{props.item.desc}</p>
        </div>
        <div className="mx-auto">
          <FancyButton
            location={"/"}
            title={"See Special"}
            padding={"1rem 2.5rem"}
            fontsize={"2rem"}
          />
        </div>
      </div>
    </li>
  );
};

export default SpecialItem;
