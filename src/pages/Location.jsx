import { useEffect, useState } from "react";
import Header from "../elements/Header";
import FindLocation from "../components/location/FindLocation";
import LocationMap from "../components/location/LocationMap";

const LocationPage = () => {
  const [myLocation, setMyLocation] = useState("");
  useEffect(() => {
    document.title = "Smacky's | Locations";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const chooseLocation = (location) => {
    setMyLocation(location);
  };

  const editLocation = () => {
    setMyLocation("");
  };
  return (
    <>
      <main className="container-xxl">
        <Header title={"Locations"} addClass={"page-header"} />
        {!myLocation && <FindLocation chooseLocation={chooseLocation} />}
        {myLocation && (
          <LocationMap
            location={myLocation}
            editLocation={editLocation}
            padding={"0.5rem 1rem"}
          />
        )}
      </main>
    </>
  );
};

export default LocationPage;
