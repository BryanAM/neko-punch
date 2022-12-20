import React from 'react';
import "./neko.scss";

interface NekoProps {
  catUrl: string;
};

function Neko ({catUrl}: NekoProps) {
  return(
    <>
      <img className="neko" alt="cat" src={catUrl} />
    </>
  );
};

export default Neko;