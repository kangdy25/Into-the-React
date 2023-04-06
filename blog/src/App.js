import { useState } from 'react';
import './App.css';

function App() {
  let postDate = "4월 6일에 씀";
  const [글제목1, setA] = useState('남자 코트 추천');
  const [글제목2, setB] = useState('강남 우동 맛집');
  const [글제목3, setC] = useState('파이썬 독학');


  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그임</h4>
      </div>
      <div className='list'>
        <h4>{글제목1}</h4>
        <p>{postDate}</p>
      </div>
      <div className='list'>
        <h4>{글제목2}</h4>
        <p>{postDate}</p>
      </div>
      <div className='list'>
        <h4>{글제목3}</h4>
        <p>{postDate}</p>
      </div>
    
    
    
    
    
    </div>
  );
}

export default App;
