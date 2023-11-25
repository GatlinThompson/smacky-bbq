import Jumbotron from "../components/home/Jumbotron";
import PhoneApp from "../components/home/PhoneApp";
import FancyButton from "../elements/FancyButton";

const HomePage = () => {
  return (
    <main>
      <section className=" px-0 px-lg-5 container-fluid">
        <Jumbotron />
      </section>
      <div className="container  mt-5 text-center">
        <FancyButton
          location={"/"}
          title={"Order Here"}
          addClass={"home-order-now-btn"}
        />
      </div>
      <PhoneApp />
      <div>ass</div>
    </main>
  );
};

export default HomePage;
