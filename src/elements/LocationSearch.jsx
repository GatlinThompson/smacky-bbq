import { useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../store/user-context";
import { useContext } from "react";

const LocationSearch = (props) => {
  const [query, setQuery] = useState("");
  const [locations, setLocations] = useState([]);
  const [seeLocations, setSeeLocations] = useState(false);
  const userCtx = useContext(UserContext);

  const changeHandler = (event) => {
    const value = event.target.value;
    setQuery(value);
    props.setLocation(event.target.value);

    //Toggle CORS off for full effect otherwise wishful thinking.
    //Good chrome extension
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${value}&key=AIzaSyDvnTtdpTq402kGwLhB3ivwChkLWB8v6yM`
      )
      .then((response) => {
        setLocations(response.data.predictions.slice(0, 4));
      })
      .catch((error) => {
        console.error("Error fetching predictions:", error);
      });
    setSeeLocations(true);
  };

  const changeLocation = (event) => {
    setQuery(event.target.innerText);
    closeLocations();
    props.setLocation(event.target.innerText);
  };

  const closeLocations = () => {
    const timer = setTimeout(() => {
      setSeeLocations(false);
      clearTimeout(timer);
    }, 100);
  };

  const openLocations = () => {
    setSeeLocations(true);
  };

  return (
    <>
      <div className="location-search">
        <label htmlFor={"address"}>Address</label>
        <div>
          <input
            id="address"
            type="text"
            value={query}
            onChange={changeHandler}
            onBlur={closeLocations}
            onFocus={openLocations}
            placeholder="Enter your Address"
            name="address"
          />
          <button type="submit">
            <i className={`bi bi-geo-alt  icon-smaller`} />
          </button>
        </div>
      </div>
      {seeLocations && locations.length >= 1 && (
        <div className="location-results mx-auto">
          <ul>
            {locations.map((location) => (
              <li
                key={location.place_id}
                onClick={changeLocation}
                onMouseDown={changeLocation}
              >
                <i className="bi bi-geo-alt-fill location-icon"></i>
                {location.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default LocationSearch;
