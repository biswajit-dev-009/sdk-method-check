'use client';
import React from 'react';

const Select: React.FC<{
  handleSelectedValue: (val: string) => void;
  data: string[];
  label: string;
}> = ({ handleSelectedValue, data, label }) => {
  return (
    <div className='flex flex-col w-full'>
      <label>{label}</label>
      <select
        className='w-full mt-4 px-2 py-4'
        onChange={(e) => handleSelectedValue(e.target.value)}
      >
        {data.map((method) => (
          <option key={method} value={method}>
            {method}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
