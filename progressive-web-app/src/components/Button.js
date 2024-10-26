import React from 'react';

const Button = ({ label, onClick }) => (
  <button onClick={onClick} aria-label={label}>
    {label}
  </button>
);

export default Button;
