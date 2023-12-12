import Header from "../../elements/Header";
import Input from "../../elements/Input";

const Payment = () => {
  return (
    <section>
      <hr className="form-section col-11 mx-auto" />
      <Header
        title={"Payment Method"}
        addClass="page-header mx-0"
        subHeader={true}
      />
      <form className="col-11 col-lg-5 mx-auto align-self-start">
        <div className="contact-info payment-info">
          <Input title="Name on Card" addClass={"col-12"} />
          <Input
            title="Card Number"
            addClass={"col-11 letter-spacing col-lg-9"}
            placeholder={"____ - ____ - ____ - ____"}
          />
          <div className="mt-3 mt-lg-5 d-flex flex-row">
            <Input title={"CVV"} addClass={"col-2"} type={"number"} />

            <Input
              title={"Exp. Date"}
              addClass={"col-3 ms-4"}
              placeholder={"MM/DD"}
              type={"number"}
            />
          </div>
        </div>
      </form>
      <hr className="form-section col-11 mx-auto" />
    </section>
  );
};

export default Payment;
