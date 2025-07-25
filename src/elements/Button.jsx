import { Link } from "react-router-dom";

const Button = (props) => {
  const style = {
    padding: props.padding,
    margin: props.margin,
  };

  return (
    <button
      className={`button ${props.addedClass ? props.addedClass : ""}`}
      style={style}
      type={props.type ? props.type : "button"}
      onClick={props.onClick}
    >
      {props.location && <Link to={`${props.location}`}>{props.title}</Link>}
      {!props.location && <span>{props.title}</span>}
    </button>
  );
};

export default Button;
