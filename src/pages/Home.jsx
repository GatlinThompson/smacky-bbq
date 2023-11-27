import Jumbotron from "../components/home/Jumbotron";
import PhoneApp from "../components/home/PhoneApp";
import Specials from "../components/home/Specials";
import FancyButton from "../elements/FancyButton";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return (
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
  );
};

export default HomePage;
