import { Link } from "react-router-dom";
import menu from "../../store/menu";
import Image from "../../assets/arrow_back.png";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FancyButton from "../../elements/FancyButton";
import Offcanvas from "../offcanvas/Offcanvas";
import Button from "../../elements/Button";
import Modal from "../modal/Modal";
import Customization from "./Customization";

const Details = (props) => {
  const item = menu.filter((meal) => meal.id == props.itemId);
  const [imageSrc, setImageSrc] = useState(null);
  const [showCanvas, setShowCanvas] = useState(false);
  const [stage, setStage] = useState("");
  const [show, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  useEffect(() => {
    // Dynamically import the image
    import(
      `../../assets/${item[0].title.toLowerCase().replace(/\s/g, "_")}.png`
    )
      .then((module) => {
        // Once the image is imported, update the state to trigger a re-render
        setImageSrc(module.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, []);

  const showCanvasHandler = () => {
    setSelectedItem(item[0].title);
    setShowCanvas(true);
    setStage("delivery");
  };

  const hideCanvas = () => setShowCanvas(false);

  const showModal = () => {
    setSelectedItem(item[0].title);
    setShowModal(true);
    setShowCanvas(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="details-back">
        <Link to="/menu">
          <img src={Image} />
          Back to Menu
        </Link>
      </div>
      <h1 className="header details-header text-center text-well-done">
        {item[0].title}
      </h1>
      <div className="details-meal">
        <div className="details-meal-image">
          <LazyLoadImage
            src={imageSrc}
            className={`${item[0].type.toLowerCase()} img-fluid`}
            alt={item[0].alt}
            effect="blur"
          />
        </div>
        <div className="details-meal-context">
          <h2 className={`${item[0].special ? "special" : ""} header mb-lg-2`}>
            <span className={item[0].special ? "price" : ""}>
              ${item[0].price.toFixed(2)}
            </span>
            {item[0].special ? (
              <span className="special-price ms-2">
                ${item[0].specialPrice.toFixed(2)}
              </span>
            ) : (
              ""
            )}
          </h2>
          <p className="px-3 mb-0 px-lg-0 mt-lg-0">{item[0].desc}</p>
        </div>
      </div>

      <div
        className={`${
          props.customize ? "" : "details-meal-buttons"
        } d-block text-center`}
      >
        {!props.customize && (
          <FancyButton
            title={"Start Order"}
            fontsize={"2rem"}
            padding={"0.5rem 4rem"}
            onClick={showCanvasHandler}
            addClass={"details-button"}
          />
        )}
        <div>
          <Button
            title={"Nutrient Information"}
            location={"#"}
            addedClass={"nutrient-info"}
          />
        </div>
      </div>

      {props.customize && <Customization showModal={showModal} />}

      <Offcanvas
        showCanvas={showCanvas}
        hideCanvas={hideCanvas}
        showModal={showModal}
        stage={stage}
        detailsPage={true}
        itemId={props.itemId}
      />
      <Modal show={show} selectedItem={selectedItem} closeModal={closeModal} />
    </>
  );
};

export default Details;
