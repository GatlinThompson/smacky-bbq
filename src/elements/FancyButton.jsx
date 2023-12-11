import { Link } from "react-router-dom";

const FancyButton = (props) => {
  const style = {
    padding: props.padding,
    margin: props.margin,
  };

  const anchorStyle = {
    fontSize: props.fontsize,
    padding: props.padding,
    margin: props.margin,
  };
  return (
    <button
      className={`fancy-button ${props.addClass}`}
      style={style}
      onClick={props.onClick}
      default-location={"true"}
      type="button"
      disabled={props.disabled}
    >
      {!props.disabled && props.location && (
        <Link to={`${props.location}`} style={anchorStyle}>
          {props.title}
        </Link>
      )}
      {props.disabled && props.location && <span>{props.title}</span>}
      {!props.location && props.title}
    </button>
  );
};

export default FancyButton;
