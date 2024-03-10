import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import './Wishlist.css'
import RenderStar from './RenderStar';

const WishListItem = (props) => {
    const { wishList , index, handleRemoveWishlist} = props;
    return (
        <div className='wishlist-wrapper'>
        <Row>
            <Col xs={6} md={4}>
                <div className='wish-list-img'><img src={wishList.image_url}/></div>
            </Col>
            <Col xs={6} md={4}>
                <div>{wishList.name}</div>
                <div><RenderStar star={wishList.rating} starwidth='20px'/></div>
                {wishList.couplefriendly && (<div><img src={'./public/hug.png'} /> Couple Friendly</div>)}
                {wishList.freecancellation && (<div><img src={'./public/parcel.png'} /> Free Cancellation</div>)}
            </Col>
            <Col xs={6} md={4}>
                <Button onClick={()=>handleRemoveWishlist(index)}>Remove</Button>
            </Col>
        </Row>
        </div>
    )
}

export default WishListItem;