import React, { SelectHTMLAttributes } from 'react';
import './style.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  label: string;
  options: Array<{
    value: string;
    label: string;
  }>;
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...rest }) => {
  return (
    <div className='select-block'>
      <label htmlFor={name}>{label}</label>
      <select value='' id={name} {...rest}>
        <option value='' disabled hidden>
          Selecione uma opção
        </option>
        {options.map((option) => {
          return <option value={option.value} label={option.label} key={option.value}></option>;
        })}
      </select>
    </div>
  );
};

export default Select;
