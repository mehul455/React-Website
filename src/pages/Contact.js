import React from "react";
import "../css/contact.css";

const Contact = () => {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center pt-5">
            <h2 className="form-title">Get in Touch</h2>
          </div>
        </div>

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
                  type="text"
                  className="form-control"
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
