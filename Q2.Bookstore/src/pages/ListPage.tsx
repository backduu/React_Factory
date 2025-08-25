import React, { useState , useEffect} from 'react';
import axios from 'axios';
import bookdata from '../data/Bookdata';
import { Container, Row } from 'react-bootstrap';
import BookItem from '../components/BookItem';

const ListPage: React.FC = () => {
    const [books, setBooks] = useState(bookdata);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        if(!loaded) 
        {
            axios.get('/books.json')
            .then((result) => {
                console.log("result 데이터: ");
                console.log(result.data);
                console.log("books: ");
                console.log(books);

                let copy = [...books, ...result.data];
                setBooks(copy);
                setLoaded(true);

                console.log("copy = [...books, ...result.data] : ");
                console.log(copy);
            })
            .catch(()=>{
                console.log('fail');
            });
        }
    }, [loaded, books])
    return (
        <div>
            <Container>
                <div className='project_header_container'>
                    <h1 className='project_header'>도서 리스트</h1>
                    <div className='hr'></div>
                </div>
                <div>
                    <Row className="text-center">
                        {books.map((item, i) => (
                            <BookItem key={i} book={item}></BookItem>
                        ))}
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default ListPage;