import { useEffect, useState } from "react";
import { getReviews } from "../services/hotelService";
import RenderStar from "./RenderStar";
import Card from 'react-bootstrap/Card';
import {Row, Col, Container } from "react-bootstrap";

const Reviews = () => {
    const [reviews, SetReviews] = useState([]);

    useEffect(() => {
        callReviewService();
    }, [])

    const callReviewService = async () => {
        const rev = await getReviews();
        SetReviews(rev.data);
    }

    return (
        <Container className="reviews-wrapper">
        <div className='section-heading'><h1>Reviews</h1></div>
        <Row xs={1} md={3} className="g-4">
        {reviews.length > 0 && reviews.map((item)=>
            (
                <Col key={item.name}>
                <Card>
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        <p>"{item.description}"</p>
                        <RenderStar star={item.rating} />
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            )
        )}
    </Row>
    </Container>
    )
}

export default Reviews;