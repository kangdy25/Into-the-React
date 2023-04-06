import { useState } from 'react';
import './App.css';

function App() {
  const postDate = "4월 6일에 씀";
  const [title, setTitle] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [like, setLike] = useState(0);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그임</h4>
      </div>
      <div className='sort'>
        <button className='sort__button' onClick={() => {
          let sortContent = [...title];
          sortContent.sort();
          setTitle(sortContent);
        }}>세끼... 정렬!!</button>
      </div>
      <div className='list'>
        <h4>{title[0]}<span className='title' onClick={() =>{
          let copyTitle = [...title];
          copyTitle[0] = '여자 코트 추천';
          setTitle(copyTitle);
          }}>제목 바꾸기</span></h4>
        <p>{postDate}</p>
      </div>
      <div className='list'>
        <h4>{title[1]}<span onClick={() => {setLike(like + 1)}}>👍🏻 </span>{like}</h4>
        <p>{postDate}</p>
      </div>
      <div className='list'>
        <h4>{title[2]}<span onClick={() => {setLike(like + 1)}}>👍🏻 </span>{like}</h4>
        <p>{postDate}</p>
      </div>
    </div>
  );
}

export default App;
