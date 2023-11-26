const Header = (props) => {
  return (
    <div className={`title-header mx-auto ${props.addClass}`}>
      <h2>{props.title}</h2>
    </div>
  );
};

export default Header;
