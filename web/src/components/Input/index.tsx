import React from 'react';

import './styles.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...props }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input {...props} id={name} />
    </div>
  );
};

export default Input;
