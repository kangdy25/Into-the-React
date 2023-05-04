import React, { lazy, Suspense ,useState } from 'react';
import './App.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import data from './data';
import Card from './Components/Card';
import {Routes, Route, useNavigate, Outlet} from 'react-router-dom'
import axios from 'axios';
import Loading from './UI/Loading';
// import Detail from './Routes/Detail';
// import Cart from './Routes/Cart';
import { useQuery } from '@tanstack/react-query';

const Cart = lazy(()=> import('./Routes/Cart.jsx'));
const Detail = lazy(()=> import('./Routes/Detail.jsx'));

function App() {
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();
  let [buttonCheck, setButtonCheck] = useState(0);
  let [buttonDisable, setButtonDisable] = useState(false);
  let [loadingStatus, setLoadingStatus] = useState(false);

  let result = useQuery('작명', ()=>
    axios.get('https://codingapple1.github.io/userdata.json')
    .then((a)=>{ 
      console.log('요청됨')
      return a.data })
  )

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home"><Nav.Link href='./'>Coupang</Nav.Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link href="./#new">New Product</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/event')}}>Event</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
          </Nav>
          <Nav className='ms-auto'>
            <div>
              { result.isLoading && '로딩중' }
              { result.error && '에러남' }
              { result.data && result.data.name }
            </div>
          </Nav>
        </Container>
      </Navbar>
      
      <Suspense fallback={<div>로딩중임</div>}>
        <Routes>
          <Route path="/" element={
            <div>
              <div className='main-bg'></div>
                <div></div>
                <Container>
                  <div class="row" >
                    {
                      shoes.map((a, i) => {
                        return (
                            <Card shoes={shoes[i]} i={i}></Card>
                            )
                          })
                    }
                    </div>
                </Container>
                <button onClick={() => {
                  setLoadingStatus(true);
                  setButtonCheck(buttonCheck = buttonCheck + 1);
                  console.log(buttonCheck);
                  if (buttonCheck < 3) {
                    axios.get(`https://codingapple1.github.io/shop/data${buttonCheck + 1}.json`)
                    .then((result)=>{
                      setLoadingStatus(false);
                      let copy = [...shoes, ...result.data];
                      setShoes(copy);
                    })
                    .catch(()=>{console.log('실패함 ㅅㄱ')})
                  } else {
                    alert('더 이상 상품이 없음');
                    setLoadingStatus(false);
                    setButtonDisable(buttonDisable = true);
                  }
                }} disabled={buttonDisable}>버튼</button>
                {
                  loadingStatus === true ? <Loading/> : null
                }
              </div>} 
            />
            <Route path="/detail/:id" element={
                <Detail shoes={shoes}/>
              } />
            <Route path="/cart" element={<Cart/>} />

            <Route path="/about" element={<About/>}>
              <Route path="member" element={<div>멤버임</div>}/>
              <Route path="location" element={<div>위치정보임</div>}/>
            </Route>

            <Route path="/event" element={<Event/>}>
              <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>}/>
              <Route path="two" element={<p>생일 기념 쿠폰 받기</p>}/>
            </Route>
          <Route path="*" element={<div>없는 페이지임;;</div>}/>
        </Routes>
      </Suspense>
    </div>
  );
}

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return (
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
