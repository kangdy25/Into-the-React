import './App.css'
import { useState } from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'
import { getEmotionImages } from './util/get-emotion-image'

function App() {
  const nav = useNavigate();

  const onClickButton = () => {
    nav("/new")
  }
  
  return (
    <>
    <div className="">
      <img src={getEmotionImages(1)} alt="emotion" />
      <img src={getEmotionImages(2)} alt="emotion" />
      <img src={getEmotionImages(3)} alt="emotion" />
      <img src={getEmotionImages(4)} alt="emotion" />
      <img src={getEmotionImages(5)} alt="emotion" />
    </div>
    <div>
      <Link to ={"/"}>Home</Link>
      <Link to ={"/new"}>New</Link>
      <Link to ={"/diary"}>Diary</Link>
    </div>
    <button onClick={onClickButton}>새로운 페이지로 이동!</button>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/new' element={<New/>} />
      <Route path='/diary/:id' element={<Diary/>} />
      <Route path='*' element={<Notfound/>} />
    </Routes>
    </>
  )
}

export default App
