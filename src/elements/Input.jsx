const Input = (props) => {
  return (
    <div className="input-without">
      {props.title && (
        <label htmlFor={props.title.toLowerCase()}>{props.title}</label>
      )}
      <div>
        <input
          type={props.type}
          name={props.title}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
};

export default Input;
