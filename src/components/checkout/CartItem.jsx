import menu from "../../store/menu";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../../elements/Button";

const CartItem = (props) => {
  const meal = menu.filter((meal) => meal.id === props.id);
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Dynamically import the image
    import(
      `../../assets/${meal[0].title.toLowerCase().replace(/\s/g, "_")}.png`
    )
      .then((module) => {
        // Once the image is imported, update the state to trigger a re-render
        setImageSrc(module.default);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className={`checkout-item-container`}>
      <div className={`checkout-item col-11 mx-auto ${props.addClass}`}>
        <div className="checkout-image">
          <LazyLoadImage
            src={imageSrc}
            alt={meal[0].alt}
            className={`${meal[0].type.toLowerCase()}`}
          />
        </div>
        <div className="checkout-content">
          <div className="checkout-title">
            <p>{meal[0].title}</p>
            <i className="bi bi-x" />
          </div>
          <p className="checkout-price header">${meal[0].price.toFixed(2)}</p>
          <div className="checkout-desktop">
            <div className="checkout-qty">
              <p className="mb-0">Quanity:</p>
              <span>1</span>
            </div>
            <div className="checkout-button  d-none d-md-block">
              <Button title="Customize Meal" />
            </div>
          </div>
        </div>
      </div>
      <div className="checkout-button col-12 text-center mt-3 d-block d-md-none">
        <Button title="Customize Meal" />
      </div>
    </div>
  );
};

export default CartItem;
