import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div style={{height:'300px'}} className=' mt-5 w-100 bg-info '>
      <div className='footer-content container d-flex justify-content-between'>
        <div style={{width:'300px'}} className="media mt-5 ">
          <h5 className='text-light'><i className="fa-solid fa-van-shuttle"></i> E Cart        </h5>
          <p style={{textAlign:'justify'}} className='text-light' >Designed and build with all the love in the world by the bootstap team with the help of our contributors</p>
          <span className='text-light'>Code licenced MIT, docs cc BY 3.0.</span>
          <span className='text-light'>Currently v5.3.2</span>
        </div>
        <div className="links mt-5 d-flex text-light flex-column">
          <h5 className='d-flex '>Links</h5>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}} >Landing Page</Link>
        <Link to={'/home'} style={{textDecoration:'none',color:'white'}} >Home Page</Link>
        <Link to={'/watch'} style={{textDecoration:'none',color:'white'}} >Watch History</Link>

        </div>
        <div className="guides mt-5 d-flex flex-column text-light">
          <h5>Guides</h5>
          <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}  >React JS</a>
          <a href="https://reactrouter.com/en/main" target='_blank' style={{textDecoration:'none',color:'white'}}  >React Routing</a>
          <a href="https://react-bootstrap.netlify.app/" target='_blank' style={{textDecoration:'none',color:'white'}}  >React Bootstrap</a>

        </div>
        <div className="contact mt-5 text-light">
          <h5>Contact Us</h5>
          <div className="d-flex">
            <input type="text" className="form-control me-1" placeholder='Email Id Please' />
            <button className='btn btn-info'><i class="fa-solid fa-arrow-right-long"></i></button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">

            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}  >
            <i className="fa-brands fa-twitter fa-1x"></i></a>

            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}  >
            <i className="fa-brands fa-instagram fa-1x"></i></a>

            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}  >
            <i className="fa-brands fa-facebook fa-1x"></i></a>

            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}  >
            <i className="fa-brands fa-linkedin fa-1x"></i></a>

            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}  >
            <i className="fa-brands fa-github fa-1x"></i></a>

            <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}  >
            <i  className="fa-solid fa-phone fa-1x"></i></a>
            </div>
            
        </div>


      </div>
      <p className='text-center mt-3 text-light'>Copyright &copy; 2024 Media Player. Built with React</p>

    </div>
  )
}

export default Footer