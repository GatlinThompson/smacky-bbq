import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Header from "../elements/Header";

const CheckoutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Smacky's | Checkout</title>
      </Helmet>
      <main className="container-xxl">
        <Header title={"Checkout"} addClass={"page-header"} />
      </main>
    </>
  );
};

export default CheckoutPage;
