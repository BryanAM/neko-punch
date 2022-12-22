import React from 'react';
import './select.scss';


interface SelectProps {
  data: string[] | undefined;
  id: string;
}
function Select({data, id}: SelectProps) {
  return (
    <div>
       <label htmlFor={id}>Standard Select</label>
      <select id={id}>
        {data?.map((data) => (
          <option key={data}>{data}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
