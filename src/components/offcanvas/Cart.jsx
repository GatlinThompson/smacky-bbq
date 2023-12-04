import Button from "../../elements/Button";
import FancyButton from "../../elements/FancyButton";

const Cart = (props) => {
  const handleStage = () => {
    props.setStage("location");
  };
  return (
    <div className="cart">
      <div className="cart-purchases">asd</div>
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
          <div className="text-center">
            <FancyButton
              title={"Proceed to Checkout"}
              margin={"3rem 2rem 0"}
              padding={"6px"}
              fontSize={"2rem"}
              location={"/checkout"}
              onClick={props.onClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
