import React from "react";
import {useState,useEffect} from 'react'
import './App.css'
import Tempelates from "./components/Tempelates";
import Meme from "./components/Meme";

function App() {
  const [tempelates,setTempelates] = useState([])
  const [meme, setMeme] = useState(null)
  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
    .then((res)=> res.json())
    .then((data)=>{
      setTempelates(data.data.memes)
    })
  },[])
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      {meme === null ? <h5>Click on these images and generate your own meme !!</h5> : ""}
      {meme === null ? <Tempelates tempelates={tempelates} setMeme={setMeme} /> : <Meme meme={meme} setMeme={setMeme} />}
    </div>
  );
}

export default App;
