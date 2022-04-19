import React from "react";
import "../css/contact.css";
import { useSelector } from "react-redux";
import Header from "../component/header";
const Contact = () => {
  const themeReducer = useSelector((themeReducer) => themeReducer.Darkreducer);
  let { theme } = themeReducer;
  
  return (
    <>
      <div className="container mb-5">
        {/* <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center pt-5">
            <h2 className="form-title">Get in Touch</h2>
          </div>
        </div> */}
<Header heading="Get in Touch" theory='Fill The Form And Let Me Know You Like My WebSite  Or Any Changes You Want' />

        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <form id="contact-form" name="myForm" className="form">
              <div className="form-group">
                <label
                  className="form-label"
                  id="nameLabel"
                  htmlFor="name"
                ></label>
                <input
                  style={theme ? {backgroundColor:"#18191a", borderColor:'white',fontWeight:'bold',color:'white' }  : {backgroundColor:"white", borderColor:'black' }}
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  tabIndex="1"
                  required
                />
              </div>

              <div className="form-group">
                <label
                  className="form-label"
                  id="emailLabel"
                  htmlFor="email"
                ></label>
                <input
                    style={theme ? {backgroundColor:"#18191a", borderColor:'white',fontWeight:'bold',color:'white' }  : {backgroundColor:"white", borderColor:'black' }}
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  tabIndex="2"
                  required
                />
              </div>

              <div className="form-group">
                <label
                  className="form-label"
                  id="subjectLabel"
                  htmlFor="sublect"
                ></label>
                <input
                  style={theme ? {backgroundColor:"#18191a", borderColor:'white',fontWeight:'bold',color:'white' }  : {backgroundColor:"white", borderColor:'black' }}
                  type="text"
                  className="form-control "
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  tabIndex="3"
                  required
                />
              </div>

              <div className="form-group">
                <label
                  className="form-label"
                  id="messageLabel"
                  htmlFor="message"
                ></label>
                <textarea
                  style={theme ? {backgroundColor:"#18191a", borderColor:'white',fontWeight:'bold',color:'white'}  : {backgroundColor:"white", borderColor:'black' }}
                  rows="4"
                  cols="60"
                  name="message"
                  className="form-control"
                  id="message"
                  placeholder="Your message"
                  tabIndex="4"
                  required
                ></textarea>
              </div>

              <div className="text-center margin-top-15">
                <button
                  style={theme ? {backgroundColor:"white", borderColor:'white',fontWeight:'bold',color:'black' }  : {backgroundColor:"black", borderColor:'black' , color:'white' }}
                  type="submit"
                  onClick={(e)=>e.preventDefault()}
                  className="btn btn-mod btn-border btn-large"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
