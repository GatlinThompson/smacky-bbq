import CartItem from "./CartItem";
import Button from "../../elements/Button";

const Cart = () => {
  return (
    <section className="cart-checkout">
      <div className="cart-list">
        <CartItem id={4} addClass={"checkout-true"} />
      </div>

      <div className="total">
        <div className="text-center">
          <Button
            title="Add more Meals"
            addedClass="checkout-add-more mx-auto"
            location={"/order"}
          ></Button>
          <hr className="form-section col-11 mx-auto mt-lg-5" />
          <div className="checkout-discount col-11 mx-auto">
            <h2 className="header cart-discount-header text-start text-lg-center">
              Discount:<span>Birthday Bash</span>
            </h2>
          </div>
          <div className="checkout-total-price">
            <h2 className="header">Total:</h2>
            <p className="header">$17.88</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
