import React from 'react';
import "./neko.scss";

interface NekoProps {
  catUrl: string;
};

function Neko ({catUrl}: NekoProps) {
  return(
    <div className="neko-polaroid">
      <img className="neko" alt="cat" src={catUrl} />
    </div>
  );
};

export default Neko;