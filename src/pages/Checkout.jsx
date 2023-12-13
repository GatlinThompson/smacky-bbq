import { useEffect, useState } from "react";
import Header from "../elements/Header";
import Payment from "../components/checkout/Payment";
import Address from "../components/checkout/Address";
import FancyButton from "../elements/FancyButton";
import Modal from "../components/modal/Modal";
import Cart from "../components/checkout/Cart";
import Image from "../assets/arrow_back.png";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const [show, setShowModal] = useState(false);

  useEffect(() => {
    document.title = "Smacky's | Checkout";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const showModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
      <Modal show={show} closeModal={closeModal} placeOrder={true} />
    </>
  );
};

export default CheckoutPage;
