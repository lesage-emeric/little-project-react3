
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


const MyPopup = () => (
  <Popup trigger={<button>Open Popup</button>} position="right center">
    <div>Popup content here!</div>
  </Popup>
);


export default MyPopup;
