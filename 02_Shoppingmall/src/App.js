import React, { useState } from 'react';
import './App.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import data from './data';
import Card from './Components/Card';
import Detail from './Routes/Detail';
import {Routes, Route, useNavigate, Outlet} from 'react-router-dom'

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><Nav.Link href='./'>Coupang</Nav.Link></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link href="./#new">New Product</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/event')}}>Event</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/about')}}>About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
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
          </div>} 
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes}/>} />

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
