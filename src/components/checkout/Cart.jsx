import { useContext } from "react";
import CartItem from "./CartItem";
import Button from "../../elements/Button";
import UserContext from "../../store/user-context";

const Cart = () => {
  const userCtx = useContext(UserContext);
  const cartTotal = userCtx.getCartTotal();
  const hasItems = userCtx.cart.length > 0;

  return (
    <section className="cart-checkout">
      <div className="cart-list">
        {!hasItems && (
          <div className="text-center py-5">
            <p className="header">Your cart is empty</p>
            <Button title="Browse Menu" addedClass="mt-3" location={"/menu"} />
          </div>
        )}
        {userCtx.cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            addClass={"checkout-true"}
            checkout={true}
          />
        ))}
      </div>

      {hasItems && (
        <div className="total">
          <div className="text-center">
            <Button
              title="Add more Meals"
              addedClass="checkout-add-more mx-auto"
              location={"/order"}
            ></Button>
            <hr className="form-section col-11 mx-auto mt-lg-5" />
            <div className="checkout-total-price">
              <h2 className="header">Total:</h2>
              <p className="header">${cartTotal.toFixed(2)}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
