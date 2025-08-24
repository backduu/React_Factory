import { Container } from 'react-bootstrap';

const Footer: React.FC = () => {
    return (
        <footer className="text-white py-1 mt-3" style={{ backgroundColor: '#4164E1' }}>
                <Container className='text-center'>
                    대표: 백두현<br/>
                    이메일: <a href="" className='text-white'>power4290@gmail.com</a><br/>
                    블로그: <a href="" className='text-white' target='_blank' rel='noopener noreferer'>
                        power4290@blog.net</a><br/>
                    Copyright ⓒ 백두현 Corp. All Rights Reserved.<br/>
                </Container>
        </footer>
    )
}

export default Footer;