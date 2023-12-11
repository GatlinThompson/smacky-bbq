const Input = (props) => {
  return (
    <div
      className={`input-without ${props.addClass ? props.addClass : ""}`}
      style={{ width: props.width }}
    >
      {props.title && (
        <label htmlFor={props.title.toLowerCase()}>{props.title}</label>
      )}
      {!props.textarea && (
        <div>
          <input
            type={props.type}
            name={props.title}
            placeholder={props.placeholder}
            onChange={props.onChange}
            id={props.title.toLowerCase()}
            value={props.value}
          />
        </div>
      )}
      {props.textarea && (
        <div className="input-textarea">
          <textarea
            type={props.type}
            name={props.title}
            placeholder={props.placeholder}
            onChange={props.onChange}
            id={props.id}
            rows={props.rows}
            value={props.value}
          />
        </div>
      )}
    </div>
  );
};

export default Input;
