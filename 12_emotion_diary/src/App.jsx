import './App.css'
import { useState } from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import Home from './pages/Home'
import New from './pages/New'
import Diary from './pages/Diary'
import Notfound from './pages/Notfound'
import { getEmotionImages } from './util/get-emotion-image'
import Button from './components/Button'
import Header from './components/Header'

function App() {
  const nav = useNavigate();  
  
  return (
    <>
      <Header 
        title={"title"} 
        leftChild={<Button text={"Left"} />} 
        rightChild={<Button text={"Right"} />}
      />
      <Button text={'hello'} type={'POSITIVE'} onClick={()=>{
        console.log('hello~~')
      }}/>
      <Button text={'hello'} type={'DEFAULT'} onClick={()=>{
        console.log('hello~~')
      }}/>
      <Button text={'hello'} type={'NEGATIVE'} onClick={()=>{
        console.log('hello~~')
      }}/>

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
