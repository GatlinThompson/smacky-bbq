import Button from "../../elements/Button";
import FancyButton from "../../elements/FancyButton";
import { useEffect, useState } from "react";

const MenuItem = (props) => {
  const [imageSrc, setImageSrc] = useState(null);

  const showCanvas = () => {
    console.log("MENU ITEM");
  };

  useEffect(() => {
    // Dynamically import the image
    import(
      `../../assets/${props.item.title.toLowerCase().replace(/\s/g, "_")}.png`
    )
      .then((module) => {
        // Once the image is imported, update the state to trigger a re-render
        setImageSrc(module.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, []);

  return (
    <li className="menu-item col-12">
      <div className="menu-item-img mx-auto">
        <img
          src={imageSrc}
          alt={`Image of ${props.item.title}`}
          className={`${props.item.type.toLowerCase()}`}
        />
      </div>

      <div className="menu-item-price-head">
        <h4 className="menu-item-header header">{props.item.title}</h4>
        <div className="menu-item-price header">
          <p className={props.item.special ? "special" : ""}>
            <span className={props.item.special ? "price" : ""}>
              ${props.item.price.toFixed(2)}
            </span>
            {props.item.special ? (
              <span className="special-price ms-2">
                ${props.item.specialPrice.toFixed(2)}
              </span>
            ) : (
              ""
            )}
          </p>
        </div>
      </div>
      <div className="menu-item-desc col-11 mx-auto mx-lg-0">
        <p>{props.item.desc}</p>
      </div>
      <div className="menu-item-extra text-center text-md-end">
        <Button title={"More Details"} location={"#"} />
      </div>
      <div className="menu-item-order text-center text-md-start">
        <FancyButton
          title={"Start Order"}
          fontsize={"1.75rem"}
          padding={"4px 44.5px"}
          onClick={props.showCanvas}
        />
      </div>
    </li>
  );
};

export default MenuItem;
