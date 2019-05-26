import React from "react";
import PropTypes from "prop-types";

const SimpleInput = ({
  textLabel,
  type,
  name,
  placeholder,
  textChange,
  textValue,
  onChange,
  id
}) => {
  return (
    <div className="field">
      <label style={{textAlign: 'left', fontSize: 15}}>{textLabel}</label>
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        onChange={event => onChange(event)}
        value={textValue}
        required
      />
    </div>
  );
};

SimpleInput.propTypes = {
  textLabel: PropTypes.string,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  textChange: PropTypes.func.isRequired,
  textValue: PropTypes.string.isRequired
};

export default SimpleInput;
