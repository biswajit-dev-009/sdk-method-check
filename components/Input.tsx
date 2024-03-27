import React from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  isMultiline?: boolean;
  noOfLines?: number;
  handleChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

const Input: React.FC<InputProps> = ({
  label,
  isMultiline = false,
  noOfLines,
  name = '',
  placeholder = '',
  value,
  handleChange,
}) => {
  return (
    <>
      <label htmlFor={name} className='text-lg mb-4'>{label}</label>
      {isMultiline ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className='w-full p-2 text-gray-700 text-base h-full'
        />
      ) : (
        <input
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className='h-12 w-full p-2 text-gray-700 text-base'
        />
      )}
    </>
  );
};

export default Input;
