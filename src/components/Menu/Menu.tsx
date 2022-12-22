import React, { useCallback, useEffect, useState } from 'react';
import Select from '../Select/Select';
import Toggle from '../Toggle/Toggle';
import './menu.scss';


interface MenuProps {
  open: Boolean;
  setCustomAPI: {};
}
function Menu({ open = false, setCustomAPI = {}}: MenuProps) {
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
        
        <div className="menu-item">
          <label htmlFor="select-tag">猫のタグを選ぶ</label>
          <Select id="select-tag" data={tags} />
        </div>

        <div className="menu-item">
          <label htmlFor="cat-says">猫はなんという</label>
          <input className="menu-cat-says-input" id="cat-says" placeholder="にゃーん"/>
        </div>
      </div>
    </div>
  )
};

export default Menu;