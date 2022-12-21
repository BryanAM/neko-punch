import React from 'react';
import './menu.scss';


interface MenuProps {
  open: Boolean;
}
function Menu({ open = false }: MenuProps) {
  return (
    <div className={`menu ${open ? 'open' : ''}`}>
      <h2>猫のフィルター</h2>
    </div>
  )
};

export default Menu;