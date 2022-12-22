import React from 'react';
import './select.scss';


interface SelectProps {
  data: string[] | undefined;
  id: string;
  disabled: boolean | undefined;
}
function Select({data, id, disabled}: SelectProps) {
  return (
    <div className="select">
      <select id={id} disabled={disabled}>
        {data?.map((data) => (
          <option key={data}>{data}</option>
        ))}
      </select>
      <span className="focus"></span>
    </div>
  );
};

export default Select;
