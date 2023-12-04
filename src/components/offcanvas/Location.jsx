import { useState, useContext } from "react";
import FancyButton from "../../elements/FancyButton";
import LocationSearch from "../../elements/LocationSearch";
import { useNavigate } from "react-router";
import UserContext from "../../store/user-context";

const Location = (props) => {
  const userCtx = useContext(UserContext);
  const navigate = useNavigate();
  const [location, setLocation] = useState("");

  const handleStage = () => {
    if (!props.detailsPage) {
      props.showModal(true);
      return;
    }
    navigate(`/customize/${props.itemId}`);
  };

  const formSubmit = (event) => {
    event.preventDefault();

    if (location.trim().length == 0) {
      return;
    }
    //userCtx.updateAddress(location);
    handleStage();
  };

  const setLocationHandler = (location) => {
    setLocation(location);
    userCtx.updateAddress(location);
    console.log(userCtx);
  };

  return (
    <>
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
      </div>
    </>
  );
};

export default Location;
