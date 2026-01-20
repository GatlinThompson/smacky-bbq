import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../elements/Header";
import Payment from "../components/checkout/Payment";
import Address from "../components/checkout/Address";
import FancyButton from "../elements/FancyButton";
import Modal from "../components/modal/Modal";
import Cart from "../components/checkout/Cart";
import Image from "../assets/arrow_back.png";
import { Link } from "react-router-dom";
import UserContext from "../store/user-context";

const CheckoutPage = () => {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();
  const [show, setShowModal] = useState(false);
  const hasItems = userCtx.cart.length > 0;

  useEffect(() => {
    document.title = "Smacky's | Checkout";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    // Redirect if cart is empty
    if (!hasItems) {
      navigate("/menu");
    }
  }, [hasItems, navigate]);

  const showModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handlePlaceOrder = () => {
    // Clear the cart after order is placed
    userCtx.clearCart();
    setShowModal(false);
    // Navigate to home or order confirmation
    navigate("/");
  };

  return (
    <>
      <main className="container-xxl">
        <div className="details-back">
          <Link to="/menu">
            <img src={Image} />
            Back to Menu
          </Link>
        </div>
        <Header title={"Checkout"} addClass={"page-header mt-3"} />
        <Cart />
        <Payment />
        <Address />
        <div className="text-center col-11  col-lg-5 mx-auto">
          <FancyButton
            title={"Place Order"}
            addClass={"place-order-button"}
            onClick={showModal}
          />
        </div>
      </main>
      <Modal
        show={show}
        closeModal={closeModal}
        placeOrder={true}
        onConfirm={handlePlaceOrder}
      />
    </>
  );
};

export default CheckoutPage;
