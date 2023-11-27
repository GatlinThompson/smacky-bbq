import pic_1 from "../../assets/jumbotron_1.png";
import pic_2 from "../../assets/jumbotron_2.png";
import pic_3 from "../../assets/jumbotron_3.png";
import pic_4 from "../../assets/jumbotron_4.png";
import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";
import Button from "../../elements/Button";

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
          alt='Image of meat being cooked on a grill with fire with text saying, "Fire it up, its grill oclock".'
        />
        <Carousel.Caption>
          <Button
            location={"/"}
            title={"Order Now"}
            addedClass={"jumbotron-button"}
          />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={pic_2}
          className="d-block w-100"
          alt='Image of Ribs being cooked on a grill with text saying, "Where smokey Dreams meet savory Reality".'
        />
        <Carousel.Caption>
          <Button
            location={"/"}
            title={"Crave Hunger"}
            addedClass={"jumbotron-button"}
          />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={pic_3}
          className="d-block w-100"
          alt='Image of a cooked chicken drumstick with text surround the chicken".'
        />
        <Carousel.Caption>
          <Button
            location={"/"}
            title={"Order Now"}
            addedClass={"jumbotron-button"}
          />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={pic_4}
          className="d-block w-100"
          alt="Image of the daily specials list being served throughout the week."
        />
        <Carousel.Caption>
          <Button
            location={"/"}
            title={"Order Now"}
            addedClass={"jumbotron-button"}
          />
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Jumbotron;
