 // eslint-disable-next-line
import React, { useState } from 'react';
import './App.css';
import {Navbar, Container, Nav} from 'react-bootstrap';
import data from './data';
import Card from './Card';

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Coupang</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Best</Nav.Link>
            <Nav.Link href="#new">New Product</Nav.Link>
            <Nav.Link href="#special">Special</Nav.Link>
            <Nav.Link href="#magazine">magazine</Nav.Link>
            <Nav.Link href="#cart">cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

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
    </div>
  );
}

export default App;
