import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { searchProduct } from '../REDUX/Slices/productSlice';

function Header({insideHome}) {
  const dispatch = useDispatch()
  const wishlistCount = useSelector(state=>state.wishlistReducer).length
const cartCount = useSelector(state=>state.cartReducer).length

  return (
    <Navbar style={{zIndex:'10'}} expand="lg" className="bg-info position-fixed top-0 w-100">
    <Container>
      <Navbar.Brand > <Link className='text-light fw-bolder' to={'/'} style={{textDecoration:'none'}} ><i className="fa-solid fa-van-shuttle me-1"></i>E Cart</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
         { insideHome &&
          <Nav.Link >
           <input onChange={(e)=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{width:'300px'}} className='form-control' type="text" placeholder='search products here !!!'/>
            </Nav.Link>}
          <Nav.Link ><Link to={'/wishlist'} className='text-light fw-bolder'style={{textDecoration:'none'}}  >
            <i className="fa-solid fa-heart text-primary"></i> Wishlist <Badge bg="secondary">{wishlistCount}</Badge>
            </Link></Nav.Link>

            <Nav.Link ><Link to={'/cart'} className='text-light fw-bolder'style={{textDecoration:'none'}}  >
            <i className="fa-solid fa-cart-plus text-success"></i> Cart <Badge bg="secondary">{cartCount}</Badge>
            </Link></Nav.Link>

      
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header