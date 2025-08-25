import React from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';

const CartPage: React.FC = () => {
    return (
        <Container>
            <h2>장바구니</h2>
            <Table bordered>
                <thead>
                    <tr>
                        <th>상품정보</th>
                        <th>수량</th>
                        <th>상품금액</th>
                        <th>주문하기</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ddd</td>
                        <td>33</td>
                        <td>34000원</td>
                        <td><Button>주문하기</Button></td>
                    </tr>
                </tbody>
            </Table>
            <Row>
                <Col>
                    <h5>총 상품금액: 34000원</h5>
                </Col>
                <Col>
                    <Button variant="success">주문하기</Button>
                </Col>
            </Row>
        </Container>
    )    
}

export default CartPage;