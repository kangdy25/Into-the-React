import './App.css';
import {Navbar, Container, Nav} from 'react-bootstrap';

function App() {
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
        <div class="row">
          <div class="col-md-4">
            <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="80%"/>
            <h4>상품명</h4>
            <p>상품 설명</p>
          </div>
          <div class="col-md-4">
            <img src='https://codingapple1.github.io/shop/shoes2.jpg' width="80%"/>
            <h4>상품명</h4>
            <p>상품 설명</p>
          </div>
          <div class="col-md-4">
            <img src='https://codingapple1.github.io/shop/shoes3.jpg' width="80%"/>
            <h4>상품명</h4>
            <p>상품 설명</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
