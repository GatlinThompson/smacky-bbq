import { NavLink } from "react-router-dom";

const Button = (props) => {
  const style = {
    padding: props.padding,
    margin: props.margin,
  };
  return (
    <button className={`button ${props.addedClass}`} style={style}>
      <NavLink to={`${props.location}`}>{props.title}</NavLink>
    </button>
  );
};

export default Button;
