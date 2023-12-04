import pic_1 from "../../assets/jumbotron_1.webp";
import pic_2 from "../../assets/jumbotron_2.webp";
import pic_3 from "../../assets/jumbotron_3.webp";
import pic_4 from "../../assets/jumbotron_4.webp";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import Button from "../../elements/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Jumbotron = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          src={pic_1}
          className="d-block w-100"
          effect="blur"
          alt='Image of meat being cooked on a grill with fire with text saying, "Fire it up, its grill oclock".'
        />
        <Carousel.Caption>
          <Button
            location={"/menu"}
            title={"Eat the Heat"}
            addedClass={"jumbotron-button"}
          />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={pic_2}
          className="d-block w-100"
          effect="blur"
          alt='Image of Ribs being cooked on a grill with text saying, "Where smokey Dreams meet savory Reality".'
        />
        <Carousel.Caption>
          <Button
            location={"/menu"}
            title={"Crave Hunger"}
            addedClass={"jumbotron-button"}
          />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={pic_3}
          effect="blur"
          className="d-block w-100"
          alt='Image of a cooked chicken drumstick with text surround the chicken".'
        />
        <Carousel.Caption>
          <Button
            location={"/menu"}
            title={"Yummy Food"}
            addedClass={"jumbotron-button"}
          />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={pic_4}
          className="d-block w-100"
          effect="blur"
          alt="Image of the daily specials list being served throughout the week."
        />
        <Carousel.Caption>
          <Button
            location={"/menu"}
            title={"Order Now"}
            addedClass={"jumbotron-button"}
          />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Jumbotron;
