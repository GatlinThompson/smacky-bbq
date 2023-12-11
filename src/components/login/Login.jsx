import Button from "../../elements/Button";
import Header from "../../elements/Header";
import Input from "../../elements/Input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const sumbitHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <>
      <div className="d-flex flex-column flex-lg-row login-container">
        <section className="login-form col-11 col-lg-5 mx-auto align-self-start">
          <form className="col-12 mx-auto" onSubmit={sumbitHandler}>
            <Input title={"Email"} type={"email"} />
            <Input title={"Password"} type={"password"} />
            <div className="remember-password">
              <div>
                <Link to="#">Forgot Password?</Link>
              </div>
              <div className="d-flex">
                <label className="remember-login-checkbox">
                  <input type="checkbox" name="remember-login" />
                  <span className="checkmark">
                    <i className="bi bi-check-lg"></i>
                  </span>
                </label>
                Stay Logged In?
              </div>
            </div>
            <div className="login-button text-center col-12">
              <Button
                title={"Login"}
                addedClass={"login-button"}
                type={"submit"}
              />
            </div>
          </form>
        </section>
        <div className="text-center or col-12 col-lg-2 align-self-start mt-lg-5 pt-lg-5">
          <p>OR</p>
        </div>
        <section className="sign-up col-11 mx-auto col-lg-5 text-center">
          <div className="text-center col-12 align-self-center">
            <h2 className="header mb-0">New Member?</h2>
            <p className="mx-auto">
              Check out a few of the amazing perks Smacky’s has to offer
            </p>
          </div>
          <div className="perk-list">
            <Header title={"Perks"} addClass={"perks"} sideHeader={true} />
            <ul className="text-start col-11">
              <li>Discounts and Special Offers</li>
              <li>Loyalty Programs</li>
              <li>Advance Notice of Specials or Limited-Time Offerings</li>
              <li>and much more...</li>
            </ul>
          </div>
          <div className="login-button text-center col-12 mt-4 p-4">
            <Button
              title={"Sign Up"}
              addedClass={"login-button"}
              location={"/signup"}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
