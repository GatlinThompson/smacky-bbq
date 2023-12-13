import { LazyLoadImage } from "react-lazy-load-image-component";
import storeImage from "../../assets/first_store.webp";

const History = () => {
  return (
    <section className="history col-12 d-flex flex-column flex-lg-row row">
      <div className="history-image col-11 mx-auto col-lg-7 mx-lg-0 order-1">
        <LazyLoadImage
          src={storeImage}
          alt="first store location located in the heart of the city"
          effect="blur"
        />
      </div>
      <p className="col-11 mx-auto col-lg-12 mb-0 order-2 order-lg-3">
        Smaky's Smokin's BBQ Shack, founded by former firefighter Sam "Smaky"
        Jenkins in 2001, started as a backyard experiment that blossomed into a
        community sensation. The rustic barn-turned-shack, adorned with
        firefighting memorabilia, has become a beloved local hub, renowned for
        slow-cooked meats and a secret sauce rumored to hold hints of Smaky's
        grandmother's apple pie recipe. Passing the torch to his daughter,
        Emily, the shack remains a flavorful testament to a legacy built on
        passion, community, and the smokin' spirit that defines its unique
        history.
      </p>
      <div className="values col-12 order-3 order-lg-2 col-lg align-self-center">
        <h2 className="header text-center">Our Values</h2>
        <div className="perk-list mt-3">
          <ul className="text-start col-11 col-md-10 mt-1 mx-auto">
            <li>Bold Flavor, Deep Passion.</li>
            <li>Connecting Communities with BBQ Bliss</li>
            <li>Warm Hospitality, Delicious Tradition.</li>
            <li>Legacy of Dedication, Secret Recipes Intact.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default History;
