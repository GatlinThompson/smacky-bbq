import { Link } from "react-router-dom";

const FancyButton = (props) => {
  const style = {
    padding: props.padding,
    margin: props.margin,
  };

  const anchorStyle = {
    fontSize: props.fontsize,
  };
  return (
    <button
      className={`fancy-button ${props.addClass}`}
      style={style}
      onClick={props.onClick}
    >
      {props.location && (
        <Link to={`${props.location}`} style={anchorStyle}>
          {props.title}
        </Link>
      )}
      {!props.location && props.title}
    </button>
  );
};

export default FancyButton;
