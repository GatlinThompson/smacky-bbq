import FancyButton from "../../elements/FancyButton";
import InputWithIcon from "../../elements/InputWithIcon";

const Location = (props) => {
  const handleStage = () => {
    console.log("ASDASD");
  };

  const formSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="location">
      <div>
        <form onSubmit={formSubmit}>
          <InputWithIcon
            title={"Address"}
            icon={"bi bi-geo-alt"}
            placeholder={"Enter your address"}
          />
        </form>
      </div>
      <p className="text-center">OR</p>
      <div>
        <FancyButton
          title={
            <>
              <i className="bi bi-crosshair2" />
              <span>Use my location</span>
            </>
          }
          addClass={"oc-buttons mx-auto location"}
          fontsize={"1.75rem"}
          padding={"0.75rem 15px"}
          onClick={handleStage}
        />
      </div>
    </div>
  );
};

export default Location;
