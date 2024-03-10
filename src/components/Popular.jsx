
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import RenderStar from './RenderStar';
const Popular = (props) => {
    const { popular, handleAddWishList } = props
    return (
        <>
            <div className='section-heading'><h1>Popular Hotels</h1></div>
            <Row xs={1} md={3} className="g-4">
                {popular.map((item) => (
                    <Col key={item.name}>
                        <Card>
                            <Card.Img variant="top" src={item.image_url} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    <RenderStar star={item.rating} />
                                </Card.Text>
                                <div className='feature-wrapper'>
                                {item.couplefriendly && (
                                    <Card.Text>
                                        <img src={'./public/hug.png'} />
                                        <span className='feature-text'>Couple Friendly</span>
                                    </Card.Text>
                                )}
                                {item.freecancellation && (
                                    <Card.Text>
                                        <img src={'./public/parcel.png'} />
                                        <span className='feature-text'>Free Cancellation</span>
                                    </Card.Text>
                                )}
                                </div>
                                <Button variant="primary" onClick={() => handleAddWishList(item)}>Add to Wishlist</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Popular;