import Header from "../../elements/Header";
import Button from "../../elements/Button";
import { useContext } from "react";
import UserContext from "../../store/user-context";

const Address = () => {
  const userCtx = useContext(UserContext);

  return (
    <section className="checkout-address">
      <Header title={"Address"} addClass="page-header" subHeader={true} />
      <div className="location-edit text-center checkout-address-text">
        <p className="mb-0 address-text">{userCtx.address}</p>
        <Button
          title={"Edit Address"}
          addedClass={"address-checkout"}
          location={"#"}
        />
      </div>
      <hr className="form-section col-11 mx-auto" />
    </section>
  );
};

export default Address;
