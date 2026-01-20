import { useContext } from "react";
import Button from "../../elements/Button";
import FancyButton from "../../elements/FancyButton";
import CartItem from "./CartItem";
import UserContext from "../../store/user-context";

const Cart = (props) => {
  const userCtx = useContext(UserContext);
  const cartTotal = userCtx.getCartTotal();
  const itemCount = userCtx.getCartItemCount();
  const hasItems = userCtx.cart.length > 0;

  const handleStage = () => {
    props.setStage("location");
  };

  return (
    <div className="cart">
      <div className="cart-purchases mt-4">
        {!hasItems && (
          <div className="text-center py-4">
            <p>Your cart is empty</p>
            <Button
              title={"Browse Menu"}
              addedClass={"cart-btn mt-3"}
              location="/menu"
              onClick={props.onClick}
            />
          </div>
        )}
        {userCtx.cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      {hasItems && (
        <div className="cart-total">
          <div className="cart-summary mb-3">
            <div className="d-flex justify-content-between px-3">
              <span>Subtotal ({itemCount} items):</span>
              <span className="fw-bold">${cartTotal.toFixed(2)}</span>
            </div>
          </div>
          <div className="text-center">
            <div className="text-center mt-4">
              <FancyButton
                title={"Proceed to Checkout"}
                fontSize={"1.5rem"}
                location={"/checkout"}
                onClick={props.onClick}
                addClass={"cart-button"}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
