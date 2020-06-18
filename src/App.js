import React,{useState} from 'react'
import './App.css';
import Parent from './parent'
import counterContext from './counterContext'

function App() {

  const count=useState(5);
  return (
    <counterContext.Provider value={count}>
    <div className={`App`}>
      <Parent />
    </div>
    </counterContext.Provider>
  );
}

export default App;
