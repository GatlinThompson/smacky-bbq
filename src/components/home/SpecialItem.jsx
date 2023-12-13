import { useState, useEffect } from "react";
import FancyButton from "../../elements/FancyButton";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SpecialItem = (props) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Dynamically import the image
    import(
      `../../assets/${props.item.title.toLowerCase().replace(/\s/g, "_")}.png`
    )
      .then((module) => {
        // Once the image is imported, update the state to trigger a re-render
        setImageSrc(module.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, []);

  return (
    <li>
      <div className="mx-auto">
        <LazyLoadImage src={imageSrc} alt={props.item.alt} effect="blur" />
      </div>
      <div className="mx-auto">
        <p className="header text-center special-title">{props.item.title}</p>
        <div className="special-text">
          <p>{props.item.desc}</p>
        </div>
        <div className="mx-auto">
          <FancyButton
            location={"/menu"}
            title={"See Special"}
            padding={"1rem 2.5rem"}
            fontsize={"2rem"}
            addClass={"special-button"}
          />
        </div>
      </div>
    </li>
  );
};

export default SpecialItem;
