import React from 'react';
import './inputField.scss';

export default function InputField({
  type, value, onChange, handleChange, name, label, placeholder, select
}) {
  return (
    <>
    <div className='inputDiv'>
      <label>{label}</label>
      <label>{select}</label>
      <input
       name={name}
       type={type}
       value={value}
       placeholder={placeholder}
       onChange={onChange} />
    </div>
    </>
  );
}
