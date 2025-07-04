import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "../../elements/Button";
import { useEffect, useState } from "react";

const RewardItem = (props) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    // Dynamically import the image
    import(`../../assets/${props.image}.png`)
      .then((module) => {
        // Once the image is imported, update the state to trigger a re-render
        setImageSrc(module.default);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="reward-item col-12 col-lg-9 mx-auto">
      <div className="reward-item-img">
        <LazyLoadImage src={imageSrc} alt={props.alt} effect="blur" />
      </div>
      <div className="reward-item-content">
        <h2 className="header">{props.title}</h2>
        <p>{props.desc}</p>
      </div>
      <div className="reward-item-button text-center">
        <Button
          location={"/menu"}
          title={"Use Reward"}
          addedClass={"rewards-button"}
        />
      </div>
    </div>
  );
};

export default RewardItem;
