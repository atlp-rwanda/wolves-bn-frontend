import React from 'react';
import './inputField.scss';

export default function InputField({
  type, value, onChange, name, label
}) {
  return (
    <>
    <div className='inputDiv'>
  <label>{label}</label>
      <input
       name={name}
       type={type}
       value={value}
       onChange={onChange} />
    </div>
    </>
  );
}
