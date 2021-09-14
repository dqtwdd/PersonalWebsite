// import ReactDOM from 'react-dom';
import React, { useState } from 'react';
function Container(props) {
  const [random, setRandom] = useState(Math.floor(Math.random() * 100));

  function lllllll() {
    setRandom(Math.floor(Math.random() * 100));
  }

  return (
    <div
      style={{ width: '150px', height: '150px', background: 'green', color: 'pink' }}
      onClick={() => {
        lllllll();
      }}
    >
      this is a square.
      {random}
    </div>
  );
}
export default Container;
