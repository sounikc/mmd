import Carousel from 'react-bootstrap/Carousel';

function HomeSlider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img text="First slide" src="./public/hotelbanner1.jpg"/>
        <Carousel.Caption>
          <h3>Domestic Destination</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img text="Second slide" src="./public/hotel-banner2.jpg"/>
        <Carousel.Caption>
          <h3>Internal Destination</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeSlider;