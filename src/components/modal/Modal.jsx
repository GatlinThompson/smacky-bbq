import Modal from "react-bootstrap/Modal";
import Button from "../../elements/Button";
import FancyButton from "../../elements/FancyButton";
import { useContext, useEffect, useState } from "react";

import UserContext from "../../store/user-context";

const Modals = (props) => {
  const userCtx = useContext(UserContext);
  const [show, setShow] = useState(false);

  const startOrdering = (e) => {
    userCtx.startOrder(true);
    props.closeModal();
  };

  const closeOrder = () => {
    userCtx.startOrder(false);
  };

  return (
    <Modal
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={props.show}
      className="mx-auto"
    >
      <Modal.Body className="mx-auto">
        {!props.placeOrder && (
          <>
            <h3 className="text-center header modal-header mx-auto mb-0">
              {props.selectedItem} was added to Cart.
            </h3>
            <p className="text-center modal-context mb-0 col-12 col-lg-8 mx-auto">
              {props.selectedItem} was successfully added to your cart.
            </p>
            <div className="modal-buttons col-11  col-lg-6 text-center mx-auto">
              <Button
                title={"Add more to Order"}
                onClick={startOrdering}
                location={"/order"}
                addedClass={"add-more-modal-btn col-12"}
              />
              <FancyButton
                title={"Proceed to Checkout"}
                addClass={"checkout-modal-btn col-12"}
                location={"/checkout"}
                onClick={startOrdering}
              />
            </div>
          </>
        )}

        {props.placeOrder && (
          <>
            <h3 className="text-center header modal-header mx-auto mb-0">
              Your Order is Confirmed
            </h3>
            <p className="text-center modal-context mb-0 col-12 col-lg-8 mx-auto">
              Your order was confirmed, the chefs have began to grill up your
              food.
            </p>
            <div className="modal-buttons col-11  col-lg-6 text-center mx-auto">
              <Button
                title={"Return to Home"}
                location={"/"}
                onClick={closeOrder}
                addedClass={"add-more-modal-btn col-12"}
              />
            </div>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default Modals;
