import React from 'react';
import './toggle.scss';

interface ToggleProps {
  change: () => void;
  checked: boolean | undefined;
  label: string;
};

function Toggle({change, checked, label}: ToggleProps){

  return (
    <label className="toggle">
      <input type="checkbox" onChange={change} checked={checked}/>
      <span className="slider round"></span>
    </label>
  )
};

export default Toggle;