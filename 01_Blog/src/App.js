import { useState } from "react";
import "./App.css";

function App() {
    const date = new Date();
    const yyyy = date.getFullYear();
    const mm = date.getMonth() < 9 ? `0${date.getMonth() + 1}` : (date.getMonth + 1);
    const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    let postDate = `${yyyy}.${mm}.${dd}`;
    let [title, setTitle] = useState([
        "남자 코트 추천",
        "강남 우동 맛집",
        "파이썬 독학"
    ]);
    let [like, setLike] = useState([0, 0, 0]);
    let [newLike] = useState(0);
    let [modal, setModal] = useState(false);
    let [modalTitle, setModalTitle] = useState(0);
    let [input, setInput] = useState('');

    let titleChange = () => {
        let copyTitle = [...title];
        copyTitle[0] = '여자 코트 추천';
        setTitle(copyTitle);
    };

    let publishContent = () => {
        // let copyTitle = [...title, input]; // 이것도 맞음 ㅇㅇ
        let copyTitle = [...title];
        copyTitle.unshift(input);
        setTitle(copyTitle);
        
        // 발행될 때 좋아요 개별 추가
        let copyLike = [...like];
        copyLike.unshift(newLike);
        setLike(copyLike);
    };

    let deleteContent = (contentId) => {
        let copyTitle = [...title];
        copyTitle.splice(contentId, 1)
        setTitle(copyTitle);

        // 삭제될 때 좋아요 개별 삭제
        let copyLike = [...like];
        copyLike.splice(contentId, 1);
        setLike(copyLike);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <h4>블로그임</h4>
            </div>

            {
                title.map((a, i) => {
                    return (
                        <div className="list" key={i}>
                            <h4 onClick={() => {setModal(!modal); setModalTitle(i) }}>{title[i]}
                            <span onClick={(e) => {
                                e.stopPropagation();
                                let copyLike = [...like];
                                copyLike[i] = like[i] + 1;
                                setLike(copyLike);

                            }} > 👍🏻{" "}
                            </span>
                                {like[i]} 
                            </h4>
                            <p>{postDate}</p>
                            <button onClick={() => {
                                deleteContent(i);
                            }}>삭🌟제</button>
                        </div>
                    )
                })
            }
            <div className="publish">
                <input value={input} onChange={(e) => {setInput(e.target.value); console.log(e.target.value);}}></input>
                <button disabled={!input} onClick={publishContent}>글 발행</button>
            </div>
            
            {
                modal === true ? <Modal color={'#aaa'} modalTitle={modalTitle} title={title} titleChange={titleChange}></Modal> : null 
            }
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal" style={{background: props.color}}>
            <h4>{props.title[props.modalTitle]}</h4>
            <p>날짜</p>
            <p>상세 내용</p>
            <button onClick={props.titleChange}>글 수정</button>
        </div>
    )
}

export default App;
