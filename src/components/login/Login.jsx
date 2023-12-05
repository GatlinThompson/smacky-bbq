import Button from "../../elements/Button";
import Input from "../../elements/Input";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <section className="login-form col-11 col-lg-5 mx-auto">
        <form className="col-12 mx-auto ">
          <Input title={"Email"} type={"email"} />
          <Input title={"Password"} type={"password"} addClass={""} />
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
              Show Password
            </div>
          </div>
          <div className="login-button text-center">
            <Button
              title={"Login"}
              addedClass={"login-button"}
              type={"submit"}
            />
          </div>
        </form>
      </section>
      <div className="text-center or">
        <p>OR</p>
      </div>
    </>
  );
};

export default Login;
