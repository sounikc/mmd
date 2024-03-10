import { Col, Container, Row } from "react-bootstrap";
import './Home.css'

const Footer = () => {
    return (
        <footer className="page-footer font-small blue pt-4 footer-color">
            <Container>
                <Row>
                    <Col xs={6} md={12}>
                        <div className="text-center footer-copyright text-center pb-3">Copyright © 2024 Made with <img src={'./public/heart-footer.png'}/></div>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}

export default Footer;