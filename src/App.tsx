import React, { useEffect, useState } from 'react';
import './App.scss';
import Menu from './components/Menu/Menu';
import { ReactComponent as Hamburger } from './assets/hamburger.svg';
import Neko from './components/Neko/Neko';


interface CustomAPI {
  gif: boolean,
  selectedTag: string,
  catSays: string,
}

function App() {
  const [catUrl, setCatUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [catError, setCatError] = useState(false);
  const [customAPI, setCustomAPI] = useState<CustomAPI>({
    gif: false,
    selectedTag: '',
    catSays: ''
  });


const getAPIString = (): string => {
  if(!customAPI.gif && customAPI.selectedTag === ''  && customAPI.catSays === ''){
    return 'https://cataas.com/cat';
  }

  if(customAPI.gif) {
    return 'https://cataas.com/cat/gif'
  }

  if(customAPI.selectedTag && !customAPI.catSays) {
    return `https://cataas.com/cat/${customAPI.selectedTag}`
  }

  if(customAPI.catSays && !customAPI.selectedTag) {
    return `https://cataas.com/cat/says/${customAPI.catSays}`
  }
  return `https://cataas.com/cat/${customAPI.selectedTag}/says/${customAPI.catSays}`;
};



  const getCat = async () => {
    setLoading(true);
    setCatError(false);

    const apiString = getAPIString();
    await fetch(apiString)
    .then(response => {
      if(response.ok) {
        return response.blob();
      }
      return Promise.reject(response)
    })
    .then((blob) => {
      // blob could be type Blob | undefined so we need to check
      if(blob) {
        const imgString = URL.createObjectURL(blob);
        setCatUrl(imgString);
        setLoading(false);
      }
    })
    .catch((response) => {
      console.log(response.status, response.statusText)
      setLoading(false);
      setCatError(true)
      setCustomAPI({
        gif: false,
        selectedTag: '',
        catSays: ''
      })
    })
  };



  return (
    <div className="App theme">
      <button className="app-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        <Hamburger className={`ham hamRotate180 ham5 ${menuOpen ? 'active' : ''}`}/>
      </button>
      <Menu open={menuOpen} setCustomAPI={setCustomAPI}/>
      <h1 className="app-header">ねこぱんち</h1>
      {catError && <p className="app-action-description">🙀その猫は存在してないかもしれにゃん〜。別のフィルターをためすか再びボタンをぱんち！</p>}
      {!catUrl && !catError &&!loading && <p className="app-action-description">ボタンをぱんちしてみよ</p>}
      {!catError && (catUrl || loading) && (loading? (
        <>
          <span className="loader"></span>
          <p className="loader-text">ロード中...🐾</p>
        </>
      ) : (
        <Neko catUrl={catUrl} />
      ))}
      <button className="cat-button" type="button" onClick={getCat}>ぱんち</button>
    </div>
  );
}

export default App;
