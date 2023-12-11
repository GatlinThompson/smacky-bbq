import Header from "../elements/Header";
import Menu from "../components/menu/Menu";
import { useEffect } from "react";

const OrderPage = () => {
  useEffect(() => {
    document.title = "Smacky's | Order";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <main>
        <Header title={"Order"} addClass={"page-header"} />
        <Menu order={true} />
      </main>
    </>
  );
};

export default OrderPage;
