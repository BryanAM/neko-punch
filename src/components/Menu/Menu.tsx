import React from 'react';
import './menu.scss';


interface MenuProps {
  open: Boolean;
}
function Menu({ open = false }: MenuProps) {
  return (
    <section className={`menu ${open ? 'open' : ''}`}>
      Menu
    </section>
  )
};

export default Menu;