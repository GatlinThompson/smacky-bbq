import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Offcanvas from "../components/offcanvas/Offcanvas";
import { useState } from "react";

const RootLayout = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const [stage, setStage] = useState("");
  const showCartCanvas = () => {
    setShowCanvas(true);
    setStage("cart");
  };

  const hideCanvas = () => setShowCanvas(false);
  return (
    <>
      <NavBar showCartCanvas={showCartCanvas} />
      <Outlet />
      <Footer />
      <Offcanvas
        showCanvas={showCanvas}
        hideCanvas={hideCanvas}
        stage={stage}
      />
    </>
  );
};

export default RootLayout;
