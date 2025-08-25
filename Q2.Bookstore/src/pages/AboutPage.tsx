import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import React, { useEffect } from 'react';

const AboutPage: React.FC = () => {
    {/* useEffect의 애니메이션 효과 */}
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry)=> {
                if(entry.isIntersecting) {
                    entry.target.classList.add('show');
                } else {
                    entry.target.classList.remove('show');
                }
            });
        });

        const elements = document.querySelectorAll('.hidden');
        elements.forEach((el) => observer.observe(el));
    }, []);

    return (
    <>
        <Container>
            <Row className="text-center">
                <Col md={6} className='header_left hidden'>
                    <header className='header_left_intro'>[  바트심슨  ]</header>
                    <header className='header_left_introduce'>Hello,</header>
                    <header className='header_left_introduce'>this is bart simpson</header>
                    <div className='header_left_introduce_body'>
                        <span className='header_left_introduce_body'>lol lol lol</span><br/>
                        <span className='header_left_introduce_body'>임시로 적어넣은 공간이니 나중에 필요할 때 써먹어보세요.</span>
                    </div>
                </Col>
                
                <Col me={6}>
                    <img src='member.jpg' width={"70%"} height={"auto"} alt="대표 이미지"/>
                </Col>
            </Row>

            {/* introduce */}


        </Container>
    </>
    )
}

export default AboutPage;