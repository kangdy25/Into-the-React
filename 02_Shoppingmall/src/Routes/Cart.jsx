import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { plusLike, deleteItem } from "./../store";
import { Nav } from 'react-bootstrap';
import { Routes, Route, useNavigate } from "react-router-dom";

const Cart = () => {

    let state = useSelector((state) => { return state })
    let dispatch = useDispatch()
    let navigate = useNavigate();

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                        <th>수량 추가</th>
                        <th>삭제하기</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.cartData.map((a, i)=>{
                            return (
                                <tr>
                                    <td>{state.cartData[i].id}</td>
                                    <td>{state.cartData[i].name}</td>
                                    <td>{state.cartData[i].count}</td>
                                    <td>안녕</td>
                                    <td><button onClick={()=>{
                                        dispatch(plusLike(state.cartData[i].id))
                                    }}>+</button></td>
                                    <td><button onClick={()=>{
                                        dispatch(deleteItem(state.cartData[i].id))
                                    }}>-</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> 
            <Nav.Link onClick={()=>{navigate('/cart')}}>Cart</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/0')}}>0번</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/1')}}>1번</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail/2')}}>2번</Nav.Link>
            <Routes>
                <Route path="/cart" element={<Cart/>} />
            </Routes>
        </div>
    )
}

export default Cart;