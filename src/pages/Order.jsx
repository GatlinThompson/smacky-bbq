import Header from "../elements/Header";
import Menu from "../components/menu/Menu";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const OrderPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Smacky's | Order</title>
      </Helmet>
      <main>
        <Header title={"Order"} addClass={"page-header"} />
        <Menu order={true} />
      </main>
    </>
  );
};

export default OrderPage;
