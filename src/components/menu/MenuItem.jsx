import Button from "../../elements/Button";
import FancyButton from "../../elements/FancyButton";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const MenuItem = (props) => {
  const [imageSrc, setImageSrc] = useState(null);

  const showCanvas = () => {
    props.showCanvas(props.item.title);
  };

  useEffect(() => {
    // Dynamically import the image
    import(
      /* @vite-ignore */
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
        <LazyLoadImage
          src={imageSrc}
          alt={`Image of ${props.item.title}`}
          effect="blur"
          className={`${props.item.type.toLowerCase()}`}
        />
      </div>

      <div className="menu-item-price-head">
        <h3 className="menu-item-header header">{props.item.title}</h3>
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
        {!props.order && (
          <Button
            title={"More Details"}
            location={`/details/${props.item.id}`}
          />
        )}
        {props.order && (
          <Button
            title={"Customize Meal"}
            location={`/customize/${props.item.id}`}
          />
        )}
      </div>
      <div className="menu-item-order text-center text-md-start">
        {!props.order && (
          <FancyButton
            title={"Start Order"}
            fontsize={"1.75rem"}
            padding={"4px 44.5px"}
            onClick={showCanvas}
          />
        )}
        {props.order && (
          <FancyButton
            title={"Add to Cart"}
            fontsize={"1.75rem"}
            padding={"4px 44.5px"}
            onClick={showCanvas}
          />
        )}
      </div>
    </li>
  );
};

export default MenuItem;
