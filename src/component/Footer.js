import React from 'react'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import logo from '../images/logo/webgohill.png'

import logo2 from '../images/logo/white.png'

import '../css/footer.css'
const Footer = () => {
   const themeReducer = useSelector((themeReducer) => themeReducer.Darkreducer);
   let { theme } = themeReducer;
    return (
        <>
{/* <footer >
   <div style={theme ? {height:"250px", width:"100%", backgroundColor: "#303846", textAlign:"center" }  : {height:"250px", width:"100%", backgroundColor: "black", textAlign:"center" }}>

   

      <div style={{color:"white" , padding: "5%"}}>
         &copy; <b>2021 | Created & designed by</b> <Link to="#" style={{color: "#48dbfb"}}>WebGohil</Link>
      </div>
      <div  className="sm">
        <Link to="#" style={{color: "#48dbfb" , marginRight:"12px" }}className="fab fa-facebook-f"></Link>
        <Link to="#" style={{color: "#48dbfb" , marginRight:"12px" }}className="fab fa-twitter"></Link>
        <Link to="#" style={{color: "#48dbfb" , marginRight:"12px" }}className="fab fa-instagram"></Link>
        <Link to="#" style={{color: "#48dbfb" , marginRight:"12px" }}className="fab fa-linkedin-in"></Link>
        <Link to="#" style={{color: "#48dbfb" , marginRight:"12px" }}className="fab fa-github"></Link><br/>
      </div>
   </div>
   
</footer> */}
<footer className={`${theme ? 'dark footer-section' : 'footer-section'} `}>
        <div className="container">
            <div className="footer-cta pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-map-marker-alt"></i>
                            <div className="cta-text">
                                <h4 className={`${theme ? 'text-white' : 'text-black'}`}>Find us</h4>
                                <span>Mumbai Maharastra</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4 className={`${theme ? 'text-white' : 'text-black'}`}>Call us</h4>
                                <span>9876543212 0</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4 className={`${theme ? 'text-white' : 'text-black'}`}>Mail us</h4>
                                <span>react@info.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-content pt-5 pb-5">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 mb-50">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <Link to="index.html"><img src={theme ? logo2 : logo} style={{height:"100px",width:"130px"}} className="img-fluid" alt="logo"/></Link>
                            </div>
                            <div className="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span className={`${theme ? 'text-white' : 'text-black'}`}>Follow us</span>
                                <Link to="#"><i className="fab fa-facebook-f facebook-bg"></i></Link>
                                <Link to="#"><i className="fab fa-twitter twitter-bg"></i></Link>
                                <Link to="#"><i className="fab fa-google-plus-g google-bg"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3 className={`${theme ? 'text-white' : 'text-black'}`}>Useful Links</h3>
                            </div>
                            <ul>
                                <li><Link to="#">Home</Link></li>
                                <li><Link to="#">about</Link></li>
                                <li><Link to="#">services</Link></li>
                                <li><Link to="#">portfolio</Link></li>
                                <li><Link to="#">Contact</Link></li>
                                <li><Link to="#">About us</Link></li>
                                <li><Link to="#">Our Services</Link></li>
                                <li><Link to="#">Expert Team</Link></li>
                                <li><Link to="#">Contact us</Link></li>
                                <li><Link to="#">Latest News</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3 className={`${theme ? 'text-white' : 'text-black'}`}>Subscribe</h3>
                            </div>
                            <div className="footer-text mb-25">
                                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                            </div>
                            <div className={`${theme ? 'dark subscribe-form' : 'subscribe-form'} `}>
                                <form action="#">
                                    <input type="text" placeholder="Email Address"/>
                                    <button><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div className="copyright-text">
                            <p>Copyright &copy; 2022, All Right Reserved <Link to="#">WebGohil</Link></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><Link to="#">Home</Link></li>
                                <li><Link to="#">Terms</Link></li>
                                <li><Link to="#">Privacy</Link></li>
                                <li><Link to="#">Policy</Link></li>
                                <li><Link to="#">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>

        </>
    )
}

export default Footer
