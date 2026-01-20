import { useEffect, useState, useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../../elements/Button";
import UserContext from "../../store/user-context";

const CartItem = (props) => {
  const userCtx = useContext(UserContext);
  const [imageSrc, setImageSrc] = useState(null);
  const { item } = props;

  useEffect(() => {
    // Dynamically import the image
    import(`../../assets/${item.title.toLowerCase().replace(/\s/g, "_")}.png`)
      .then((module) => {
        setImageSrc(module.default);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [item.title]);

  const handleRemove = () => {
    userCtx.removeFromCart(item.id);
  };

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      userCtx.updateQuantity(item.id, newQuantity);
    }
  };

  return (
    <div className={`checkout-item-container`}>
      <div className={`checkout-item col-11 mx-auto ${props.addClass}`}>
        <div className="checkout-image">
          <LazyLoadImage
            src={imageSrc}
            alt={item.alt}
            className={`${item.type.toLowerCase()}`}
          />
        </div>
        <div className="checkout-content">
          <div className="checkout-title">
            <p>{item.title}</p>
            <i
              className="bi bi-x"
              onClick={handleRemove}
              style={{ cursor: "pointer" }}
            />
          </div>
          <p className="checkout-price header">${item.price.toFixed(2)}</p>
          <div className="checkout-desktop">
            <div className="checkout-qty">
              <p className="mb-0">Quantity:</p>
              <div className="d-flex align-items-center gap-2">
                <button
                  onClick={() => handleQuantityChange(item.quantity - 1)}
                  className="btn btn-sm btn-outline-secondary"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(item.quantity + 1)}
                  className="btn btn-sm btn-outline-secondary"
                >
                  +
                </button>
              </div>
            </div>
            {props.checkout && (
              <div className="checkout-button  d-none d-md-block">
                <Button
                  title="Customize Meal"
                  location={`/customize/${item.id}`}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {props.checkout && (
        <div className="checkout-button col-12 text-center mt-3 d-block d-md-none">
          <Button title="Customize Meal" location={`/customize/${item.id}`} />
        </div>
      )}
      {!props.checkout && (
        <div className="checkout-button col-12 text-center mt-3 ">
          <Button title="Customize Meal" location={`/customize/${item.id}`} />
        </div>
      )}
    </div>
  );
};

export default CartItem;
