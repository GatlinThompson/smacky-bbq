import { Link } from "react-router-dom";

const Button = (props) => {
  const style = {
    padding: props.padding,
    margin: props.margin,
  };
  return (
    <button className={`button ${props.addedClass}`} style={style}>
      <Link to={`${props.location}`} onClick={props.onClick}>
        {props.title}
      </Link>
    </button>
  );
};

export default Button;
