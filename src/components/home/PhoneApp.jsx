import slant from "../../assets/slant.svg";
import phone from "../../assets/phone.svg";
import googlePlay from "../../assets/google_play.svg";
import appStore from "../../assets/app_store.svg";
import { NavLink } from "react-router-dom";

const PhoneApp = () => {
  return (
    <section id="phone-app">
      <div>
        <img src={slant} />
      </div>
      <div className="phone">
        <div className="container-lg">
          <div className="phone-body d-grid">
            <div className="phone-header header">
              <h2 className="m-0">Skip the grumble</h2>
              <h2 className="m-0">order thru the app</h2>
            </div>

            <div className="phone-apps me-3">
              <div className="google-play">
                <NavLink to="#">
                  <img src={googlePlay} alt="Google Play Store Link" />
                </NavLink>
              </div>
              <div className="app-store">
                <NavLink to="#">
                  <img src={appStore} alt="Apple App Store Link" />
                </NavLink>
              </div>
            </div>
            <div className="phone-display">
              <div>
                <img
                  src={phone}
                  alt="cartoon phone with Smacky's logo"
                  className=""
                  //style={{ height: 354, width: 181 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneApp;
