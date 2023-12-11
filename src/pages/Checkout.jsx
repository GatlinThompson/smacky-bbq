import { useEffect } from "react";
import Header from "../elements/Header";

const CheckoutPage = () => {
  useEffect(() => {
    document.title = "Smacky's | Checkout";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <main className="container-xxl">
        <Header title={"Checkout"} addClass={"page-header"} />
      </main>
    </>
  );
};

export default CheckoutPage;
