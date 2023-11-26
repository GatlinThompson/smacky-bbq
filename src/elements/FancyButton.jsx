import { NavLink } from "react-router-dom";

const FancyButton = (props) => {
  const style = {
    padding: props.padding,
    margin: props.margin,
    fontSize: props.fontsize,
  };
  return (
    <button className={`fancy-button ${props.addClass}`} style={style}>
      <NavLink to={`${props.location}`}>{props.title}</NavLink>
    </button>
  );
};

export default FancyButton;
