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

    return (
        <div className="App">
            <div className="black-nav">
                <h4>블로그임</h4>
            </div>
            {/* <div className="list">
                <h4>{title[0]}<span className="title">제목 바꾸기</span></h4>
                <p>{postDate}</p>
            </div>
            <div className="list">
                <h4>{title[1]}<span onClick={() => {setLike1(like1 + 1);}} >👍🏻{" "}</span>
                    {like1}
                </h4>
                <p>{postDate}</p>
            </div>
            <div className="list">
                <h4>{title[2]}<span onClick={() => { setLike2(like2 + 1); }}>👍🏻{" "}</span>
                    {like2}
                </h4>
                <p>{postDate}</p>
            </div>  */}

        

            {
                title.map((tit, i) => {
                    return (
                        <div className="list" key={i}>
                            <h4>{tit}<span onClick={() => {
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

        </div>
    );
}

export default App;
