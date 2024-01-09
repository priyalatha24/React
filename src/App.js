// import logo from './logo.svg';
import React from 'react';
import './App.css';
import './pages/script';
import submit from './pages/script';

function App() {

  return (
    <div class="container">
    <h1>GEO FORM</h1>
    <div class="item">
        <input type="text" placeholder="---Enter latitude---" id="lat"/>
        <input type="text" placeholder="---Enter longitude---" id="long"/>
        <button onClick={submit}>SUBMIT</button>
        <div id="res" style={{display:'none'}}>
             
        </div>
    </div>
</div>
  );
}

export default App;
