import FancyButton from "../../elements/FancyButton";
import LocationSearch from "../../elements/LocationSearch";
import { useState, useContext } from "react";
import UserContext from "../../store/user-context";

const FindLocation = (props) => {
  const [location, setLocation] = useState("");
  const userCtx = useContext(UserContext);

  const formSubmit = (e) => {
    e.preventDefault();

    if (location.trim().length == 0) {
      return;
    }

    props.chooseLocation(location);
  };

  const useMyLocation = () => {
    props.chooseLocation(userCtx.address);
  };

  const setLocationHandler = (location) => {
    setLocation(location);
  };

  return (
    <>
      <div className="location-stage col-11 col-lg-7 mx-auto">
        <div>
          <form onSubmit={formSubmit}>
            <LocationSearch
              setLocation={setLocationHandler}
              addClass="location-pager"
            />
          </form>
        </div>
        <p className="text-center">OR</p>
        <div className="location-button">
          <FancyButton
            title={
              <>
                <i className="bi bi-crosshair2" />
                <span>Use my location</span>
              </>
            }
            addClass={"oc-buttons mx-auto location location-pager"}
            fontsize={"1.75rem"}
            padding={"0.75rem 15px"}
            onClick={useMyLocation}
          />
        </div>
      </div>
    </>
  );
};

export default FindLocation;
