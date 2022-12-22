import React, { useEffect, useState } from 'react';
import './App.scss';
import Menu from './components/Menu/Menu';
import { ReactComponent as Hamburger } from './assets/hamburger.svg';
import Neko from './components/Neko/Neko';


function App() {
  const [catUrl, setCatUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [customAPI, setCustomAPI] = useState({});


  const getCat = async () => {
    setLoading(true);
    await fetch('https://cataas.com/cat')
    .then(response => {
      if(response.ok) {
        return response.blob();
      }
    })
    .then((blob) => {
      // blob could be type Blob | undefined so we need to check
      if(blob) {
        const imgString = URL.createObjectURL(blob);
        setCatUrl(imgString);
        setLoading(false);
      }
    })
  };

  return (
    <div className="App theme">
      <button className="app-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        <Hamburger className={`ham hamRotate180 ham5 ${menuOpen ? 'active' : ''}`}/>
      </button>
      <Menu open={menuOpen} setCustomAPI={setCustomAPI}/>
      <h1 className="app-header">ねこぱんち</h1>
      {!catUrl && !loading && <p className="app-action-description">ボタンをぱんちしてみよ〜</p>}
      {(catUrl || loading) && (loading? (
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
