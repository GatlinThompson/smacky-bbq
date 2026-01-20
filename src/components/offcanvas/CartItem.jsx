import { useEffect, useState, useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import UserContext from "../../store/user-context";

const CartItem = (props) => {
  const userCtx = useContext(UserContext);
  const [imageSrc, setImageSrc] = useState(null);
  const { item } = props;

  useEffect(() => {
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
    <div className="offcanvas-cart-item mb-3">
      <div className="d-flex align-items-center gap-3">
        <div
          className="offcanvas-cart-image"
          style={{ width: "80px", height: "80px" }}
        >
          <LazyLoadImage
            src={imageSrc}
            alt={item.alt}
            className={`${item.type.toLowerCase()} img-fluid`}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </div>
        <div className="flex-grow-1">
          <div className="d-flex justify-content-between align-items-start">
            <h6 className="mb-1">{item.title}</h6>
            <i
              className="bi bi-x-lg"
              onClick={handleRemove}
              style={{ cursor: "pointer", fontSize: "1.2rem" }}
            />
          </div>
          <p className="mb-1 fw-bold">${item.price.toFixed(2)}</p>
          <div className="d-flex align-items-center gap-2">
            <button
              onClick={() => handleQuantityChange(item.quantity - 1)}
              className="btn btn-sm btn-outline-secondary px-2 py-0"
            >
              -
            </button>
            <span className="px-2">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              className="btn btn-sm btn-outline-secondary px-2 py-0"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
