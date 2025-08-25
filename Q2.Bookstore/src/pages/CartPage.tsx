import React, { useMemo } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from "react-redux";
import type { CartItem } from "../data/store";
import type { CartArray } from '../data/store';
import { changeName, increase, plusCount, minusCount, addItem, resetCart } from '../data/store';

interface CartState{
    cart : CartArray;
    user : {id: number, name: string, job: string};
}

const CartPage: React.FC = () => {
    const cartState = useSelector((state : CartState) => state);

    console.log(cartState);

    const getTotalAmount = useMemo(()=> {
        return cartState.cart.cart.reduce((total, item) => total + item.quantity * item.price, 0);
    }, [cartState.cart]);

    const dispatch = useDispatch();

    return (
        <Container>
            <h2>장바구니</h2>
            <Table bordered>
                <thead>
                    <tr>
                        <th>도서명</th>
                        <th>가격</th>
                        <th>수량</th>
                        <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cartState.cart.cart.map((item) => (
                                <tr key = {item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td><Button className='btn-warning' style={{ marginRight : '10px' }}
                                                onClick={()=> {
                                                    dispatch(plusCount(item.id))
                                                }}>+</Button>
                                        <Button className='btn-warning' style={{ marginRight : '10px' }}
                                                onClick={()=> {
                                                    dispatch(minusCount(item.id))
                                                }}>-</Button></td>
                                </tr>
                    ))}
                </tbody>
            </Table>
            <Row>
                <Col>
                    <h5>총 상품금액: {getTotalAmount.toLocaleString()} 원</h5>
                </Col>
                <Col>
                    <Button variant="success" onClick={()=>{dispatch(increase(10))}}>주문하기</Button>
                    <Button variant="primary" onClick={()=>{dispatch(resetCart())}}>카트 비우기</Button>
                </Col>
            </Row>
        </Container>
    )    
}

export default CartPage;