import React from 'react'
import {Link} from 'react-router-dom'
import { useSelector } from "react-redux";

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
                                <span>1010 Avenue, sw 54321, chandigarh</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="fas fa-phone"></i>
                            <div className="cta-text">
                                <h4 className={`${theme ? 'text-white' : 'text-black'}`}>Call us</h4>
                                <span>9876543210 0</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-4 mb-30">
                        <div className="single-cta">
                            <i className="far fa-envelope-open"></i>
                            <div className="cta-text">
                                <h4 className={`${theme ? 'text-white' : 'text-black'}`}>Mail us</h4>
                                <span>mail@info.com</span>
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
                                <a href="index.html"><img src="https://i.ibb.co/QDy827D/ak-logo.png" className="img-fluid" alt="logo"/></a>
                            </div>
                            <div className="footer-text">
                                <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                            </div>
                            <div className="footer-social-icon">
                                <span className={`${theme ? 'text-white' : 'text-black'}`}>Follow us</span>
                                <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                                <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g google-bg"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3 className={`${theme ? 'text-white' : 'text-black'}`}>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">about</a></li>
                                <li><a href="#">services</a></li>
                                <li><a href="#">portfolio</a></li>
                                <li><a href="#">Contact</a></li>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Expert Team</a></li>
                                <li><a href="#">Contact us</a></li>
                                <li><a href="#">Latest News</a></li>
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
                            <p>Copyright &copy; 2018, All Right Reserved <a href="https://codepen.io/anupkumar92/">Anup</a></p>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div className="footer-menu">
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Terms</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">Policy</a></li>
                                <li><a href="#">Contact</a></li>
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
