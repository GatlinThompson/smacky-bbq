import { useContext } from "react";
import FancyButton from "../../elements/FancyButton";
import UserContext from "../../store/user-context";

const Delivery = (props) => {
  const userCtx = useContext(UserContext);

  const handlePickup = () => {
    userCtx.setDeliveryType("pickup");
    // Add the item to cart if we have an itemId
    if (props.itemId) {
      userCtx.addToCart({ id: parseInt(props.itemId), quantity: 1 });
    }
    if (props.showModal) {
      props.showModal();
    }
    if (props.hideCanvas) {
      props.hideCanvas();
    }
  };

  const handleDelivery = () => {
    userCtx.setDeliveryType("delivery");
    // Add the item to cart if we have an itemId
    if (props.itemId) {
      userCtx.addToCart({ id: parseInt(props.itemId), quantity: 1 });
    }
    props.setStage("location");
  };

  return (
    <div className="delivery">
      <div>
        <FancyButton
          title={
            <>
              <i className="bi bi-shop" />
              <span>Pickup</span>
            </>
          }
          addClass={"oc-buttons mx-auto"}
          fontsize={"1.75rem"}
          onClick={handlePickup}
        />
      </div>
      <p className="text-center">OR</p>
      <div>
        <FancyButton
          title={
            <>
              <i className="bi bi-car-front" />
              <span>Delivery</span>
            </>
          }
          addClass={"oc-buttons mx-auto"}
          fontsize={"1.75rem"}
          onClick={handleDelivery}
        />
      </div>
    </div>
  );
};
export default Delivery;
