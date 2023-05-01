import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { plusLike } from "./../store";

const Cart = () => {

    let state = useSelector((state) => { return state })
    let dispatch = useDispatch()

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
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
                                        dispatch(plusLike())
                                    }}>+</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table> 
        </div>
    )
}

export default Cart;