import React, { useState } from 'react';
import './Input.scss';

export default function Input({
  name, type, value, handleChange
}) {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
