import FancyButton from "../../elements/FancyButton";

const Delivery = (props) => {
  const handleStage = () => {
    props.setStage("location");
  };
  return (
    <div className="delivery">
      <div>
        <FancyButton
          title={
            <>
              <i className="bi bi-shop" />
              <span>Pickup</span>
            </>
          }
          addClass={"oc-buttons mx-auto"}
          fontsize={"1.75rem"}
          onClick={handleStage}
        />
      </div>
      <p className="text-center">OR</p>
      <div>
        <FancyButton
          title={
            <>
              <i className="bi bi-car-front" />
              <span>Delivery</span>
            </>
          }
          addClass={"oc-buttons mx-auto"}
          fontsize={"1.75rem"}
          onClick={handleStage}
        />
      </div>
    </div>
  );
};
export default Delivery;
