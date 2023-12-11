import FancyButton from "../../elements/FancyButton";

const LocationItem = (props) => {
  return (
    <div className="location-item">
      <div className="location-item-title">
        <h2 className="header text-well-done">{props.location.city}</h2>
        <p className={`${props.location.open ? "text-steak-dark-red" : ""} `}>
          {props.location.status}
        </p>
      </div>
      <p className="location-item-address">{props.location.address}</p>
      <p className="location-item-miles header text-well-done">
        {props.location.miles} mi. away
      </p>
      <div className="text-center location-item-button">
        <FancyButton
          title={"Order From Here"}
          addClass={"location-button"}
          location={"/menu"}
          disabled={!props.location.open}
        />
      </div>
    </div>
  );
};
export default LocationItem;
