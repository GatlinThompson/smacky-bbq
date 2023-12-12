import { useEffect, useState } from "react";
import Header from "../elements/Header";
import Payment from "../components/checkout/Payment";
import Address from "../components/checkout/Address";
import FancyButton from "../elements/FancyButton";
import Modal from "../components/modal/Modal";

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
        <Header title={"Checkout"} addClass={"page-header"} />
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
