import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Button } from 'react-bootstrap';
const About = () => {
    return (
        <>
            <Container>
                {/* Columns are always 50% wide, on mobile and desktop */}
                <Row className='about-rows'>
                    <Col xs={4} className='about-img'><img height="300px" src="https://promos.makemytrip.com/images/independenceDay-Thailand-01072022.webp" /></Col>
                    <Col xs={8}><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p><Button className='primary'>Read More...</Button></Col>

                </Row>
                <Row className='about-rows'>
                    <Col xs={8}><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p><Button className='primary'>Read More...</Button></Col>
                    <Col xs={4} className='about-img'><img height="300px" src="https://promos.makemytrip.com/images/diwali-Pilgrimage-070922.webp" /></Col>
                </Row>
                <Row className='about-rows'>
                    <Col xs={4} className='about-img'><img height="300px" src="https://promos.makemytrip.com/images/kazakhstan-130224.webp" /></Col>
                    <Col xs={8}><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p><Button className='primary'>Read More...</Button></Col>
                </Row>
                <Row className='about-rows last-row'>
                    <Col xs={8}><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p><Button className='primary'>Read More...</Button></Col>
                    <Col xs={4} className='about-img'><img height="300px" src="https://promos.makemytrip.com/images/baku-280623.webp" /></Col>
                </Row>
            </Container>
        </>
    )
}
export default About;