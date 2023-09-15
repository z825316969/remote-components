import React, { useEffect, useState, Suspense, useMemo, lazy } from "react";
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

function wait(time = 1000){
  return new Promise(resolve => {
      setTimeout(() => {
          resolve(null);
      }, time)
  })
}

async function getComponent() {
  let require = function (dependencies, factory) {
    return factory(React)
  }
  await wait(1000)
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
  // let [Component, setComponent] = useState(null)
  
  // useEffect(() => {
  //   getComponent().then((val) => {
  //     setComponent(() => val.default)
  //   })
  // }, [])
  
  const Component1 = useMemo(() => {
    return lazy(async () => await getComponent())
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* {!!Component && (
          <Component
            x={99}
            data={{
              time1: '08:30',
              time2: '12:35',
              station1: '上海虹桥站',
              station2: '南京南站',
            }}
          />
        )} */}
        <Suspense
          fallback={(
            <span style={{fontSize: 50}}>Loading...</span>
          )}>
          <Component1
            x={99}
            data={{
              time1: '08:30',
              time2: '12:35',
              station1: '上海虹桥站',
              station2: '南京南站',
            }}
          />
        </Suspense>
      </header>
    </div>
  );
}

export default App
