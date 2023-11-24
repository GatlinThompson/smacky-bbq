import { NavLink } from "react-router-dom";
const FancyButton = (props) => {
  const style = {
    padding: props.padding,
  };
  return (
    <button className="fancy-button" style={style}>
      <NavLink to={`${props.location}`}>{props.title}</NavLink>
    </button>
  );
};

export default FancyButton;
