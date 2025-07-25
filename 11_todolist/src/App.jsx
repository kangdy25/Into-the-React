import './App.css'
import Header from './components/Header'
import List from './components/List'
import Editor from './components/Editor'
import { useState } from 'react'

const mockData = [
    {
      id: 0,
      isDone: false,
      content: "React 공부하기",  
      date: new Date().getTime(),
    },
    {
      id: 1,
      isDone: false,
      content: "성경 읽기",  
      date: new Date().getTime(),
    },
    {
      id: 2,
      isDone: false,
      content: "머슬업 훈련하기",  
      date: new Date().getTime(),
    },
  ]

function App() {
  const [todos, setTodos] = useState(mockData);
  console.log(todos)

  return (
    <div className='App'>
      <Header />
      <Editor />
      <List />
    </div>
  )
}

export default App
