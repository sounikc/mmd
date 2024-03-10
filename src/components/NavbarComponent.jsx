
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Home.css';
import { useSelector } from 'react-redux';

const NavbarComponent = () => {
    const wishlist = useSelector((store)=>store.wishList.wishItems);
    // console.log(state)
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand>MakeMyDestination</Navbar.Brand>
                <Nav className="me-auto custom-menu">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='about'>About</NavLink>
                    <NavLink to='reviews'>Reviews</NavLink>
                    <NavLink to='wishlist'>Wishlist</NavLink>
                </Nav>
                <span className='wishlist-icon'><img src={'./public/heart.png'}/></span>
                <span className='wishlist-count'>{wishlist.length}</span>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent;