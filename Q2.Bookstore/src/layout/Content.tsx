import { Navbar, Container, Nav, Col, Row, Card, Button } from "react-bootstrap";
import MyCarousel from "../components/Carousel";
import bookdata from "../data/Bookdata";
import type { Book } from "../data/Bookdata";
import { useState } from "react";
import { Link } from 'react-router-dom';
import BookItem from '../components/BookItem';

const Content: React.FC = () => {
    const [books, setBook] = useState<Book[]>(bookdata);

    return (
        <div>
            <Navbar style={{ backgroundColor: '#4169E1'}} data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/"><h1>bookStore</h1></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                        <Nav.Link href="/list">Product</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <MyCarousel></MyCarousel>

            <Container>
                <div className="project_header_container">
                    <h1 className="project_header">베스트셀러</h1>
                    <div className="hr"></div>
                </div>
                <Row className="text-center">
                    {books.map((book) => {
                        return <BookItem key={book.id} book={book} />
                    })}
                </Row>
            </Container>
        </div>
    );
};

export default Content;