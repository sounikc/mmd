
import Container from 'react-bootstrap/Container';
import './Home.css';
import { useEffect, useState } from 'react';
import { getHotels } from '../services/hotelService';
import Popular from './Popular';
import { useDispatch, useSelector } from 'react-redux';
import { addWishList } from '../utils/wishListSlice';
// import { HotelService } from '../services';


const Home = () => {
    const [hotels, setHotels] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        callService()
    }, [])
    const callService = async () => {
        const response = await getHotels();
        // console.log(response.data)
        setHotels(response.data);
    }

    const handleAddWishList = (wishItem)=>{
        dispatch(addWishList(wishItem));
    }

    // console.log(hotels)



    return (
        <Container className='home-section'>
            <Popular popular={hotels} handleAddWishList={handleAddWishList}/>
            <div className='section-heading'><h1>New Arrivals</h1></div>
        </Container>
    )
}

export default Home;