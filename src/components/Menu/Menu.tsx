import React, { useCallback, useEffect, useState } from 'react';
import Select from '../Select/Select';
import Toggle from '../Toggle/Toggle';
import './menu.scss';


interface MenuProps {
  open: Boolean;
  setCustomAPI: React.Dispatch<React.SetStateAction<any>>;
}
function Menu({ open = false, setCustomAPI}: MenuProps) {
  const [gif, setGif] = useState(false);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [catSays, setCatSays] = useState('');

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


  const onReset = () => {
    const apiObj = {
      gif: false,
      selectedTag: '',
      catSays: ''
    }

    setCustomAPI(apiObj)
    setGif(false);
    setSelectedTag('')
    setCatSays('')
  };

  const onApply = () => {
    const apiObj = {
      gif: gif,
      selectedTag: selectedTag,
      catSays: catSays
    }
    setCustomAPI(apiObj);
  }

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
          <Select id="select-tag" data={tags} disabled={gif} selectedTag={selectedTag} setSelected={setSelectedTag}/>
        </div>

        <div className="menu-item">
          <label htmlFor="cat-says">猫はなんという「英語のみ」</label>
          <input onChange={(e) => setCatSays(e.target.value)}className="menu-cat-says-input" id="cat-says" placeholder="にゃーん"  disabled={gif} value={catSays}/>
        </div>

        <div>
          <button className="menu-action-button apply" onClick={() => onApply()}>適応</button>
          <button className="menu-action-button reset" onClick={() => onReset()}>リセット</button>
        </div>
      </div>
    </div>
  )
};

export default Menu;