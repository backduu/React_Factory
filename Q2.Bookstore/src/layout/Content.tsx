import { Navbar, Container, Nav, Col, Row, Card, Button } from "react-bootstrap";
import MyCarousel from "../components/Carousel";
import bookdata from "../data/Bookdata";
import type { Book } from "../data/Bookdata";
import { useState } from "react";
import BookItem from '../components/BookItem';
import { Route, Routes } from 'react-router-dom'
import AboutPage from '../pages/AboutPage.tsx';
import ListPage from '../pages/ListPage.tsx';
import ContactPage from '../pages/ContactPage.tsx';
import DetailPage from '../pages/DetailPage.tsx';
import LoginPage from '../pages/LoginPage.tsx';
import CartPage from '../pages/CartPage.tsx';
import HomePage from "../pages/HomePage.tsx";

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
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/about" element={<AboutPage />}/>
                <Route path="/list" element={<ListPage />}/>
                <Route path="/contact" element={<ContactPage />}/>
                <Route path="/cart" element={<CartPage />}/>
                <Route path="/detail/:id" element={<DetailPage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="*" element={'페이지가 존재하지 않습니다.'}/>
            </Routes>
        </div>
    );
};

export default Content;