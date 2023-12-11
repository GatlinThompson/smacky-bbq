import Button from "../../elements/Button";
import LocationItem from "./LocationItem";
import map from "../../assets/map.webp";

const locations = [
  {
    id: 1,
    address: "153 E 110 S  Ogden UT, 84021",
    city: "Odgen",
    miles: 5.2,
    status: "Open",
    open: true,
  },
  {
    id: 2,
    address: "1153 E 1110 N  Farmington UT, 84012",
    city: "Farmington",
    miles: 20.2,
    status: "Open",
    open: true,
  },
  {
    id: 3,
    address: "153 E 115 N  Layton UT, 84011",
    city: "Layton",
    miles: 15.2,
    status: "Closed",
    open: false,
  },
];

const LocationMap = (props) => {
  return (
    <>
      <div className="location-edit text-center">
        <p className="text-well-done mb-1 mb-lg-2">
          Results for: {props.location}
        </p>
        <Button title={"Change my Location"} onClick={props.editLocation} />
      </div>
      <section className="map">
        <div className="location-list mx-auto mx-lg-0">
          {locations.map((location) => (
            <LocationItem key={location.id} location={location} />
          ))}
        </div>
        <div className="map-item d-none d-lg-block">
          <div>
            <img src={map} alt="map to locate resturant locations" />
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationMap;
