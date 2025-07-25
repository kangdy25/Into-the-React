import './App.css'
import Header from './components/Header'
import List from './components/List'
import Editor from './components/Editor'
import { useState } from 'react'

function App() {

  return (
    <div className='App'>
      <Header />
      <Editor />
      <List />
    </div>
  )
}

export default App
