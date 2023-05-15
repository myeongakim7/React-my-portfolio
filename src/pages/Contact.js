import React from "react";
import Nav from "../components/Nav";

function Contact() {
  return (
    <>
      <Nav />
      <div id="contact">
        <div className="container">
          <div className="contactText">
            <h1>Contact me</h1>
            <div className="contactCover">
              <div className="contactBox">
                <div className="contactIconBox">
                  <div className="cImgBox">
                    <img src="../images/icon-contact-call.svg" alt="call" />
                  </div>
                  {/* <!--c-img-box--> */}
                  <h3>010-7279-7724</h3>
                </div>
                {/* <!--contact-icon-box--> */}
                <div className="contactIconBox">
                  <div className="cImgBox">
                    <img src="../images/icon-contact-email.svg" alt="email" />
                  </div>
                  {/* <!--c-img-box--> */}
                  <h3>okmyonga@naver.com</h3>
                </div>
                {/* <!--contact-icon-box--> */}
              </div>
              {/* <!--contact-box--> */}
            </div>
            {/* <!-- contact-cover --> */}
          </div>
          {/* contactText */}
        </div>
        {/* <!--container--> */}
      </div>
      {/* <!--contact--> */}
    </>
  );
}

export default Contact;
