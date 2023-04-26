import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
    let [check, setCheck] = useState(true);
    let { id } = useParams();
    let findItem = props.shoes.find((x) => {
        return x.id === parseInt(id);
    })

    useEffect(() => {
        let timer = setTimeout(() => { setCheck(false) }, 2000);
        return () => {
            clearTimeout(timer); // 타이머 제거 함수
        }
    }, [])
    let [text, setText] = useState('');
    let onChange = (e) => {
        setText(e.target.value);
        console.log(e.target.value);
    }

    let onNotNumber = (e) => {
        if (text !== '' && !Number(text)) {
            alert('그러지마세요;;')
        }
    }

    return (
        <div className="container">
            {check && <div className="alert alert-warning">
                2초 이내 구매시 할인
            </div>}
            <form action="" onChange={onChange} onSubmit={onNotNumber}>
                <input type="text" placeholder="숫자만 입력하세요"></input>
                <button type="submit">입력하기</button>
                <h2>{text}</h2>
            </form>

            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{findItem.title}</h4>
                    <p>{findItem.content}</p>
                    <p>{findItem.price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;