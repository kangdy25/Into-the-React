import './App.css'
import { useEffect, useState, useRef } from 'react'
import Viewer from './components/Viewer'
import Controller from './components/Controller'

function App() {
  const [count, setCount] = useState(0);

  const isMount = useRef(false)

  // 1. 마운트 : 탄생
  useEffect(()=>{
    console.log("mount")
  }, [])

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(()=>{
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update")
  })

  // 3. 언마운트 : 죽음

  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
