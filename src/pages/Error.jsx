import Header from "../elements/Header";
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Offcanvas from "../components/offcanvas/Offcanvas";
import { useState } from "react";
import NavBar from "../components/navbar/Navbar";
import graySteak from "../assets/gray-steak.png";
import Button from "../elements/Button";

const ErrorPage = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const [stage, setStage] = useState("");

  useEffect(() => {
    document.title = "Smacky's | Page Not Found";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const showCartCanvas = () => {
    setShowCanvas(true);
    setStage("cart");
  };

  const hideCanvas = () => setShowCanvas(false);
  return (
    <>
      <NavBar showCartCanvas={showCartCanvas} />
      <main className="container-xxl">
        <Header title={"Page not found"} addClass={"page-header"} />
        <div className="error ">
          <div className="d-flex error-image">
            <img
              src={graySteak}
              alt={"gray steak on fire"}
              className={`mx-auto`}
            />
          </div>
          <div className="text-center error-context col-10 mx-auto col-lg-4">
            <p>
              Oh no! Our steak grill went rogue and charred this page to a
              crisp.
            </p>
          </div>
        </div>
        <div className="error-button text-center">
          <Button title={"Return to Home"} location={"/"} />
        </div>
      </main>
      <Footer />
      <Offcanvas
        showCanvas={showCanvas}
        hideCanvas={hideCanvas}
        stage={stage}
      />
      ;
    </>
  );
};

export default ErrorPage;
