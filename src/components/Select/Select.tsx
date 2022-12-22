import React from 'react';
import './select.scss';


interface SelectProps {
  data: string[] | undefined;
  id: string;
}
function Select({data, id}: SelectProps) {
  return (
    <div className="select">
      <select id={id}>
        {data?.map((data) => (
          <option key={data}>{data}</option>
        ))}
      </select>
      <span className="focus"></span>
    </div>
  );
};

export default Select;
