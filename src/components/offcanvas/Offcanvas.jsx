import { useEffect, useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Delivery from "./Delivery";
import Location from "./Location";
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
              &lt;
            </button>
          )}

          <button type="button" onClick={handleClose}>
            <i className="bi bi-x-lg"></i>
          </button>
        </div>
        <div className="offcanvas-title">
          {stage == "delivery" && <h2 className="header">Delivery Method</h2>}
          {stage == "location" && <h2 className="header">Find Location</h2>}
        </div>
        {stage == "location" && <Location setStage={handleStage} />}
        {stage == "delivery" && <Delivery setStage={handleStage} />}
      </Offcanvas>
    </>
  );
}

export default Offcanvass;
