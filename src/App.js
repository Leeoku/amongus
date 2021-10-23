import "./App.css";
import { data } from "./data";
import React, { useState } from 'react'
import logo from './amongus.png'

function App() {
  const [id, setId] = useState(" ") 
  const submitHandler = (e) => {
    e.preventDefault(); 
  }
  const Message = () => {
    console.log('id',id);
    const filteredId = data.filter(user=> user.id===id)
    const message = filteredId.length > 0 ? filteredId[0].message: ""
    return(<div>
      <h1 style={{whiteSpace: "pre-line"}}> {message} </h1>
    </div>)
  }

  return (
    <div className="App">
      <div>
        <img src={logo} alt="amongus" className="logo"></img>
        <h1>YOUR ID: {id}</h1>
      </div>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={(e) => setId(e.target.value)}></input>
      </form>
      <Message />
    </div>
  );
}

export default App;
