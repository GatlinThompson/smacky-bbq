import { useState } from "react";
import FancyButton from "../../elements/FancyButton";
//import InputWithIcon from "../../elements/InputWithIcon";
import LocationSearch from "../../elements/LocationSearch";

const Location = (props) => {
  const [location, setLocation] = useState("");

  const handleStage = () => {
    props.setStage("delivery");
  };

  const formSubmit = (event) => {
    event.preventDefault();

    if ((location.trim().length = 0)) {
      return;
    }
  };

  const setLocationHandler = (location) => {
    setLocation(location);
  };

  return (
    <div className="location">
      <div>
        <form onSubmit={formSubmit}>
          <LocationSearch setLocation={setLocationHandler} />
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
      <div></div>
    </div>
  );
};

export default Location;
