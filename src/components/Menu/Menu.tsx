import React, { useState } from 'react';
import Toggle from '../Toggle/Toggle';
import './menu.scss';


interface MenuProps {
  open: Boolean;
}
function Menu({ open = false }: MenuProps) {
  const [gif, setGif] = useState(false);

  return (
    <div className={`menu ${open ? 'open' : ''}`}>
      <h2 className="menu-header">猫のフィルター</h2>
      <div className="menu-container">
        <div className="menu-item menu-toggle">
          <p>GIFアニメーション</p>
          <Toggle change={() => { setGif(!gif)}} checked={gif} label="GIFアニメーション"/>
        </div>

        <div className="menu-item menu-toggle">
          <p>GIFアニメーション</p>
          <Toggle change={() => { setGif(!gif)}} checked={gif} label="GIFアニメーション"/>
        </div>
        
      </div>
    </div>
  )
};

export default Menu;