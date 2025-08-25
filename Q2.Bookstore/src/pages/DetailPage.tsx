import React, { useEffect, useRef } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useLocation, useParams } from 'react-router-dom'
import type { Book } from '../data/Bookdata';

interface LocationState {
    book : Book;
}

const DetailPage: React.FC = () => {
    const { id } = useParams<{id: string}>();
    const location = useLocation();
    const state = location.state as LocationState | undefined;
    const book = state?.book;
    
    const popupRef = useRef<Window | null>(null);

    useEffect(() => {
        popupRef.current = window.open('', '_blank', 'width=400, height=300');

        if(popupRef.current) {
            const popupDoc = popupRef.current.document;
            popupDoc.title = '특가 할인';

            // 스타일 추가
            let style = popupDoc.createElement('style');
            style.textContent = `
            body {
              font-family: sans-serif;
              padding: 20px;
              text-align: center;
            }
            button {
              margin-top: 20px;
              padding: 10px 20px;
              font-size: 16px;
              cursor: pointer;
            }
          `;
           
          popupDoc.head.appendChild(style);

          popupDoc.body.innerHTML = `
            <h2>전 도서 20% 할인</h2>
            
            <button id="closeBtn">닫기</button>
          `;
          
           // 닫기 버튼 이벤트 연결
           popupDoc.getElementById('closeBtn')?.addEventListener('click', () => {
                popupRef.current?.close();
           });
        }

        return () => {
            popupRef.current?.close();
        };
    }, []);

    return (
        <div>
            <Container className='mt-5'>
                <Row>
                    <Col md={6}>
                    <Card className='border-0'>
                        <Card.Img
                            variant='top'
                            src = {'/book_cover/' + book.id + '.jpg'}
                            style={{ borderRadius: '8px' }}
                        />
                    </Card>
                    </Col>
                    <Col md={6}>
                        <Card className='border-0 text-center'>
                            <Card.Body>
                                <Card.Title as="h3" className="mb-4">
                                    {book.title}
                                </Card.Title>
                                <Card.Text className='text-muted mb-4'>
                                    {book.star}
                                </Card.Text>
                                <Card.Text className='text-muted mb-4'>
                                    {book.content}
                                </Card.Text>
                                <Card.Text className='text-primary mb-4' as="h4">
                                    {book.price}
                                </Card.Text>
                                <Button variant='primary' 
                                        onClick={() => {
                                        }}>
                                            카트에 담기
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default DetailPage;