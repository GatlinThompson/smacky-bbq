import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Delivery from "./Delivery";
import Location from "./Location";
import Cart from "./Cart";
import backArrow from "../../assets/back_blue.svg";

function Offcanvass(props) {
  const [show, setShow] = useState(false);

  const [stage, setStage] = useState("");

  useEffect(() => {
    setShow(props.showCanvas);
    setStage(props.stage);
  }, [props.showCanvas]);

  const handleClose = () => {
    setShow(false);
    props.hideCanvas();
  };

  const handleStage = (stage) => {
    setStage(stage);
  };

  const setDelivery = () => setStage("delivery");

  return (
    <>
      <Offcanvas
        show={show}
        placement={"end"}
        backdrop={"static"}
        className="menu-offcanvas"
      >
        <div className="offcanvas-button">
          {stage == "location" && (
            <button type="button" onClick={setDelivery} className="mx-0">
              <img src={backArrow} />
            </button>
          )}

          <button type="button" onClick={handleClose}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="offcanvas-title">
          {stage == "delivery" && <h1 className="header">Delivery Method</h1>}
          {stage == "location" && <h1 className="header">Find Location</h1>}
          {stage == "cart" && <h1 className="header">Your Cart</h1>}
        </div>
        {stage == "location" && (
          <Location
            setStage={handleStage}
            showModal={props.showModal}
            detailsPage={props.detailsPage}
            itemId={props.itemId}
          />
        )}
        {stage == "delivery" && <Delivery setStage={handleStage} />}
        {stage == "cart" && (
          <Cart setStage={handleStage} onClick={handleClose} />
        )}
      </Offcanvas>
    </>
  );
}

export default Offcanvass;
