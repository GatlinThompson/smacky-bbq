const Header = (props) => {
  return (
    <div className={`title-header mx-auto ${props.addClass}`}>
      {!props.sideHeader && !props.subHeader && <h1>{props.title}</h1>}
      {props.sideHeader && <h3>{props.title}</h3>}
      {props.subHeader && <h2>{props.title}</h2>}
    </div>
  );
};

export default Header;
