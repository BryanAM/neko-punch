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
      <header className="App-header">
      </header>
      {!catUrl && !loading && <p>Press the button to get cat</p>}
      {(catUrl || loading) && (loading? (
        <p>Loading</p>
      ) : (
        <Neko catUrl={catUrl} />
      ))}
      <button className="cat-button" type="button" onClick={getCat}>Neko Punch</button>
    </div>
  );
}

export default App;
