import { useEffect, useState } from "react";
import { useParams, Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Nav } from 'react-bootstrap';
import { addItem } from "../store";
import Cart from "./Cart";

function Detail(props) {
    useEffect(()=>{
        let found = localStorage.getItem('watched');
        found = JSON.parse(found);
        found.push(findItem.id);
        found = new Set(found);
        found = Array.from(found);

        localStorage.setItem('watched', JSON.stringify(found))
    }, [])
    let navigate = useNavigate();
    let [check, setCheck] = useState(true);
    let { id } = useParams();
    let findItem = props.shoes.find((x) => {
        return x.id === parseInt(id);
    })
    let [tab, setTab] = useState(0);
    let dispatch = useDispatch();
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

    let [fade2, setFade2] = useState('')

    useEffect(() => {
        setTimeout(() => { setFade2('end'); }, 100)
        return () => {
            setFade2('')
        }
    }, [])

    return (
        <div className={`container start ${fade2}`}>
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
                    <button className="btn btn-danger" onClick={()=>{
                        dispatch(addItem({id: findItem.id, name: findItem.title, count: 1}));
                    }}>주문하기</button>
                </div>
                <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
                <Routes>
                    <Route path="/cart" element={<Cart/>} />
                </Routes>
            </div>
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={() => { setTab(0) }}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={() => { setTab(1) }}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={() => { setTab(2) }}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} />
        </div>
    );
}

function TabContent({ tab }) {
    let [fade, setFade] = useState('')

    useEffect(() => {
        setTimeout(() => { setFade('end'); }, 100)
        return () => {
            setFade('')
        }
    }, [tab])
    return <div className={`start ${fade}`}>
        {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
    </div>
}

export default Detail;