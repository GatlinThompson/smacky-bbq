import Jumbotron from "../components/home/Jumbotron";
import PhoneApp from "../components/home/PhoneApp";
import Specials from "../components/home/Specials";
import FancyButton from "../elements/FancyButton";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const HomePage = () => {
  useEffect(() => {
    document.title = "My Page Title";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Smacky's | Home</title>
      </Helmet>
      <main>
        <section className=" px-0 px-lg-5 container-fluid">
          <Jumbotron />
        </section>
        <div className="container  mt-5 text-center">
          <FancyButton
            location={"menu"}
            title={"Order Here"}
            addClass={"home-order-now-btn"}
          />
        </div>
        <PhoneApp />
        <Specials />
      </main>
    </>
  );
};

export default HomePage;
