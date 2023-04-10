import { useState } from "react";
import "./App.css";

function App() {
    const postDate = "4월 6일에 씀";
    const [title, setTitle] = useState([
        "남자 코트 추천",
        "강남 우동 맛집",
        "파이썬 독학",
        "앙 기모찌",
    ]);
    let [like, setLike] = useState([0, 0, 0, 0]);
    let titleChange = () => {
        let copyTitle = [...title];
        copyTitle[0] = '여자 코트 추천';
        setTitle(copyTitle);
    };
    let [modal, setModal] = useState(false);

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
                            <h4 onClick={() => {setModal(true)}}>{title[i]}
                            <span onClick={() => {
                                let copyLike = [...like];
                                copyLike[i] = like[i] + 1;
                                setLike(copyLike);
                            }} > 👍🏻{" "}
                            </span>
                                {like[i]} 
                            </h4>
                            <p>{postDate}</p>
                        </div>
                    )
                })
            }

            {
                modal == true ? <Modal setTitle={setTitle} title={title}></Modal> : null 
            }
        </div>
    );
}

function Modal(props) {
    return (
        <div className="modal" style={{background: props.color}}>
            <h4>{props.title[0]}</h4>
            <p>날짜</p>
            <p>상세 내용</p>
            <button onClick={props.titleChange}>글 수정</button>
        </div>
    )
}

export default App;
