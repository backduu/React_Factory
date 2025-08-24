import React from 'react';
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
    console.log("dfsdfs")
    console.log(id)
    console.log(book)
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