import React, { useEffect, useState } from "react";
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

async function getComponent() {
  let require = function (dependencies, factory) {
    return factory(React)
  }
  try {
    let val = await axios.get('./main.js')
    return new Function('require' ,`return ${val.data}`)(require)
  }
  catch (e) {
    console.error(e)
    return null
  }
}

function App() {
  let [Component, setComponent] = useState(null)
  
  useEffect(() => {
    getComponent()
    getComponent().then((val) => {
      setComponent(() => val.default)
    })
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {!!Component && <Component x={99}/>}
      </header>
    </div>
  );
}

export default App
