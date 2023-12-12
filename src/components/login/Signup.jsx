import { useState } from "react";
import Button from "../../elements/Button";
import Header from "../../elements/Header";
import Input from "../../elements/Input";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const showPassword = () => {
    const password = document.getElementById("password");
    if (password.type === "password") {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  const sumbitHandler = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <section className="sign-up-form col-11 col-lg-6 mx-auto align-self-start">
      <form className="col-12 mx-auto pt-1" onSubmit={sumbitHandler}>
        <div className="contact-info">
          <Input title={"Full Name"} type={"text"} />
          <Input title={"Email"} type={"email"} />
          <Input title={"Password"} type={"password"} id={"password"} />

          <div className="remember-password">
            <div className="d-flex justify-content-start mt-3">
              <label className="remember-login-checkbox ">
                <input
                  type="checkbox"
                  name="see password"
                  onClick={showPassword}
                />
                <span className="checkmark">
                  <i className="bi bi-check-lg"></i>
                </span>
              </label>
              Show Password
            </div>
          </div>
        </div>
        <hr className="form-section col-11 mx-auto" />
        <div className="personal-info">
          <Input
            title={"Phone Number"}
            addClass={"col-10 letter-spacing col-lg-6"}
            placeholder={"(_ _ _) - _ _ _ - _ _ _ _"}
          />
          <Input title={"Street Address"} />
          <div className="mt-3 d-flex flex-column flex-lg-row">
            <Input
              title={"Zipcode"}
              addClass={"col-4 col-lg-3"}
              type={"number"}
            />
            <Input
              title={"Birthday"}
              addClass={"col-3  mt-3 mt-lg-0 ms-lg-5 col-lg-3"}
              placeholder={"MM/DD"}
              type={"number"}
            />
          </div>
        </div>
        <div className="mb-3 mt-5 text-center col-12">
          <Button
            title={"Create my Account"}
            type={"submit"}
            addedClass={"create-button"}
          />
        </div>
      </form>
      <div className="text-center ">
        <Link to="/login" className="text-steak-dark-red">
          Already a Member? Sign in
        </Link>
      </div>
    </section>
  );
};

export default SignUp;
