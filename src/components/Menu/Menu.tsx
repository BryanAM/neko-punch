import React, { useCallback, useEffect, useState } from 'react';
import Select from '../Select/Select';
import Toggle from '../Toggle/Toggle';
import './menu.scss';


interface MenuProps {
  open: Boolean;
}
function Menu({ open = false }: MenuProps) {
  const [gif, setGif] = useState(false);
  const [tags, setTags] = useState<string[]>([]);


  const getTagData = useCallback(async () => {
    await fetch('https://cataas.com/api/tags')
      .then(response => {
        if(response.ok) {
          return response.json();
        }
      })
      .then(json => {
        setTags(json);
      })
      .catch(error => {
        console.log(error);
      })
  }, [tags]);

  useEffect(() => {
    getTagData();
  }, [])

  return (
    <div className={`menu ${open ? 'open' : ''}`}>
      <h2 className="menu-header">猫のフィルター</h2>
      <div className="menu-container">
        <div className="menu-item menu-toggle">
          <p>GIFアニメーションのみ</p>
          <Toggle change={() => { setGif(!gif)}} checked={gif} label="GIFアニメーション"/>
        </div>
          <Select id="select-tag" data={tags} />
        <div className="menu-item">
        </div>
      </div>
    </div>
  )
};

export default Menu;