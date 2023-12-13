import Button from "../../elements/Button";
import FancyButton from "../../elements/FancyButton";
import CartItem from "../checkout/CartItem";

const Cart = (props) => {
  const handleStage = () => {
    props.setStage("location");
  };
  return (
    <div className="cart">
      <div className="cart-purchases mt-4">
        <CartItem id={4} />
      </div>
      <div className="cart-total">
        <div className="cart-discount">
          <h4 className="header cart-discount-header">
            Discount:<span>Birthday Bash</span>
          </h4>
          <div className="text-center">
            <Button
              title={"Learn More"}
              addedClass={"cart-btn"}
              location={"/rewards"}
              onClick={props.onClick}
            />
          </div>
          <div className="text-center mt-5">
            <FancyButton
              title={"Proceed to Checkout"}
              fontSize={"2rem"}
              location={"/checkout"}
              onClick={props.onClick}
              addClass={"cart-button"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
