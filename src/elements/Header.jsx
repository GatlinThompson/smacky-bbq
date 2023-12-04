const Header = (props) => {
  return (
    <div className={`title-header mx-auto ${props.addClass}`}>
      <h1>{props.title}</h1>
    </div>
  );
};

export default Header;
