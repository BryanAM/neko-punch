import React, {SetStateAction, useState} from 'react';
import './App.scss';
import Neko from './components/Neko/Neko';


function App() {
  const [catUrl, setCatUrl] = useState('');
  const [loading, setLoading] = useState(false);
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
      <h1 className="app-header">ねこぱんち</h1>
      {!catUrl && !loading && <p className="app-action-description">ボタンをぱんちしてみよ〜</p>}
      {(catUrl || loading) && (loading? (
        <p>ロード中...</p>
      ) : (
        <Neko catUrl={catUrl} />
      ))}
      <button className="cat-button" type="button" onClick={getCat}>ぱんち</button>
    </div>
  );
}

export default App;
