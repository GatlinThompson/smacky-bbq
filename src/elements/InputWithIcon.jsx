const InputWithIcon = (props) => {
  return (
    <div className="input-with-icon">
      {props.title && (
        <label htmlFor={props.title.toLowerCase()}>{props.title}</label>
      )}
      <div>
        <input
          type="text"
          name={props.title.toLowerCase()}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
        <button type="submit">
          <i className={`${props.icon}  icon-smaller`} />
        </button>
      </div>
    </div>
  );
};

export default InputWithIcon;
