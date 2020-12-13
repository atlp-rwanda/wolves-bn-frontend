import React from 'react';

const Select = ({
  options, value, handleChange, name
}) => (
  <div className="Select">
    <select name={name} value={value} onChange={handleChange} defaultValue="pick" multiple={false}>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.city ? option.city : option.name}
        </option>
      ))}
    </select>
  </div>
);

export default Select;
