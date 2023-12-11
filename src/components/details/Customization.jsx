import FancyButton from "../../elements/FancyButton";
import Header from "../../elements/Header";

const Customization = (props) => {
  const isChecked = (event) => {
    const checked = event.target.checked;
    if (checked) {
      event.target.parentElement.classList.add("checked");
      event.target.parentElement.parentElement.classList.add("checked");
    } else {
      event.target.parentElement.classList.remove("checked");
      event.target.parentElement.parentElement.classList.remove("checked");
    }
  };

  const isCheckedRadio = (event) => {
    const buttonList = document.querySelectorAll(".radio-button-extra-meat");

    buttonList.forEach((button) => {
      button.parentElement.classList.remove("checked");
      button.parentElement.parentElement.classList.remove("checked");
    });

    event.target.parentElement.classList.add("checked");
    event.target.parentElement.parentElement.classList.add("checked");
  };

  const formHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <section className="customize">
        <Header title={"Customize"} />
        <section className="customize-sides">
          <div className="customize-title">
            <h2 className="header">Sides</h2>
            <p>(Choose 2 different sides)</p>
          </div>
          <div>
            <form className="sides-form" onSubmit={formHandler}>
              <div className="side-option">
                <label className={`radio-btn`}>
                  <input type="checkbox" onChange={isChecked} />
                  <span className="checkmark">
                    <i className="bi bi-check-lg"></i>
                  </span>
                </label>
                Baked Beans
              </div>

              <div className="side-option">
                <label className={`radio-btn`}>
                  <input type="checkbox" onChange={isChecked} />
                  <span className="checkmark">
                    <i className="bi bi-check-lg"></i>
                  </span>
                </label>
                Mac & Cheese
              </div>

              <div className="side-option">
                <label className={`radio-btn`}>
                  <input type="checkbox" onChange={isChecked} />
                  <span className="checkmark">
                    <i className="bi bi-check-lg"></i>
                  </span>
                </label>
                Hush Puppies
              </div>

              <div className="side-option">
                <label className={`radio-btn`}>
                  <input type="checkbox" onChange={isChecked} />
                  <span className="checkmark">
                    <i className="bi bi-check-lg"></i>
                  </span>
                </label>
                Potato Salad
              </div>

              <div className="side-option">
                <label className={`radio-btn`}>
                  <input type="checkbox" onChange={isChecked} />
                  <span className="checkmark">
                    <i className="bi bi-check-lg"></i>
                  </span>
                </label>
                Butter Bread Roll
              </div>
            </form>
          </div>
        </section>

        <section className="customize-sides">
          <div className="customize-title">
            <h2 className="header">Extra Meat</h2>
            <p>(Costs extra for extra meat)</p>
          </div>
          <div>
            <form className="sides-form" onSubmit={formHandler}>
              <div className="side-option">
                <label className={`radio-btn`}>
                  <input
                    type="radio"
                    onChange={isCheckedRadio}
                    name="extra_meat"
                    className="radio-button-extra-meat"
                  />
                  <span className="checkmark">
                    <i className="bi bi-check-lg"></i>
                  </span>
                </label>
                Yes
              </div>
              <div className="side-option checked">
                <label className={`radio-btn checked`}>
                  <input
                    type="radio"
                    onChange={isCheckedRadio}
                    name="extra_meat"
                    className="radio-button-extra-meat"
                    checked="checked"
                  />
                  <span className="checkmark">
                    <i className="bi bi-check-lg"></i>
                  </span>
                </label>
                No
              </div>
            </form>
          </div>
        </section>

        <div className="text-center">
          <FancyButton
            title={"Add to Cart"}
            addClass={"customize-button"}
            onClick={props.showModal}
            type="submit"
          />
        </div>
      </section>
    </>
  );
};

export default Customization;
