import { useState } from "react";
import "./App.css";

function App() {
    let postDate = "4월 6일에 씀";
    let [title, setTitle] = useState([
        "남자 코트 추천",
        "강남 우동 맛집",
        "파이썬 독학",
        "앙 기모찌"
    ]);
    let [like, setLike] = useState([0, 0, 0, 0]);
    let [modal, setModal] = useState(false);
    let [modalTitle, setModalTitle] = useState(0);
    let [input, setInput] = useState('');

    let titleChange = () => {
        let copyTitle = [...title];
        copyTitle[0] = '여자 코트 추천';
        setTitle(copyTitle);
    };

    let publishContent = () => {
        let copyTitle = [...title, input];
        setTitle(copyTitle);
    };

    let deleteContent = (contentId) => {
        let copyTitle = [...title];
        copyTitle.splice(contentId, 1)
        setTitle(copyTitle);
    }

    return (
        <div className="App">
            <div className="black-nav">
                <h4>블로그임</h4>
            </div>
            {/* <div className="list">
                <h4>{title[0]}<span className="title">제목 바꾸기</span></h4>
                <p>{postDate}</p>
            </div> */}

            {
                title.map((a, i) => {
                    return (
                        <div className="list" key={i}>
                            <h4 onClick={() => {setModal(true); setModalTitle(i) }}>{title[i]}
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
                <input onChange={(e) => {setInput(e.target.value); console.log(input)}}></input>
                <button onClick={() => {
                    publishContent();
                }}>글 발행</button>
            </div>
            
            {
                modal === true ? <Modal modalTitle={modalTitle} title={title} titleChange={titleChange}></Modal> : null 
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
