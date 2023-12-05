import Button from "../../elements/Button";
import { useEffect, useState } from "react";
import image from "../../assets/rewards_1.png";
const RewardItem = (props) => {
  const [imageSrc, setImageSrc] = useState(null);
  useEffect(() => {
    // Dynamically import the image
    import(props.image)
      .then((module) => {
        // Once the image is imported, update the state to trigger a re-render
        setImageSrc(module.default);
      })
      .catch((error) => {
        console.error("Error loading image:", error);
      });
  }, []);
  return (
    <div className="reward-item col-12 col-lg-9 mx-auto">
      <div className="reward-item-img">
        <img src={imageSrc}></img>
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
