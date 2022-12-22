import React from 'react';
import './select.scss';


interface SelectProps {
  data: string[] | undefined;
  id: string;
  disabled: boolean | undefined;
  setSelected: React.Dispatch<React.SetStateAction<any>>;
  selectedTag: string | undefined;
}
function Select({data, id, disabled, setSelected, selectedTag}: SelectProps) {
  return (
    <div className="select">
      <select id={id} disabled={disabled} onChange={(e) => setSelected(e.target.value)} value={selectedTag}>
        {data?.map((data) => (
          <option key={data}>{data}</option>
        ))}
      </select>
      <span className="focus"></span>
    </div>
  );
};

export default Select;
