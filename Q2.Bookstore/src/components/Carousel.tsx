import React from "react";
import { Carousel } from "react-bootstrap";
import '../App.css';

const MyCarousel: React.FC = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Carousel>
                <Carousel.Item>
                    <div className="carousel-item-custom">
                        <img className="square-img" src="/book_cover/1000.jpg" alt="first slice"/>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-item-custom">
                        <img className="square-img" src="/book_cover/1001.jpg" alt="second slice"/>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carousel-item-custom">
                        <img className="square-img" src="/book_cover/1002.jpg" alt="third slice"/>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};


export default MyCarousel;