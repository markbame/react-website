import React from 'react';
import { Link }   from 'react-router-dom';
import Fa from 'react-fontawesome'
import ScrollToTop  from 'react-scroll-up'


class Foot extends React.Component {

    render() {
        return (
            <div className="footer">
                <ScrollToTop showUnder={160}>
                  <Fa name='angle-double-up' size="3x" className="color"  />
                </ScrollToTop>
               <div className="footer-wrapper">
                  <div className="footer-content">
                      <div className="footer-columns">
                        <div className="footer-title">
                            COMPANY INFO
                        </div>
                        <div className="footer-subtitle">
                            <Link to="/aboutus">About Us</Link>
                        </div>
                        <div className="footer-subtitle">
                            <Link to="/privacypolicy">Privacy Policy</Link>
                        </div>
                        <div className="footer-subtitle">
                            <Link to="/termsandconditions">Terms and Conditions</Link>
                        </div>
                      </div>
                      <div className="footer-columns">
                        <div className="footer-title">
                            PURCHASE INFO
                        </div>
                        <div className="footer-subtitle">
                            <Link to="/paymentmethods">Payment Methods</Link>
                        </div>
                        <div className="footer-subtitle">
                            <Link to="/shippinganddelivery">Shipping & Delivery</Link>
                        </div>
                      </div>
                      <div className="footer-columns">
                        <div className="footer-title">
                            CUSTOMER SERVICE
                        </div>
                        <div className="footer-subtitle">
                            <Link to="/aboutus">  Contact Us</Link>
                        </div>
                        <div className="footer-subtitle">
                            <Link to="/faq">  Frequently Asked Questions</Link>
                        </div>
                      </div>
                      <div className="footer-columns">
                        <div className="footer-title">
                            FOLLOW US
                        </div>
                        <div className="footer-subtitle">
                            <Link to={'https://www.facebook.com/petabenyu/'}><Fa name='facebook-square' className="color"  />  Facebook</Link>
                        </div>
                        <div className="footer-subtitle">
                            <Link to={'https://www.pinterest.com/petabenyu/'}><Fa name='pinterest-square' className="color"  />  Pinterest</Link>
                        </div>
                        <div className="footer-subtitle">
                            <Link to={'https://twitter.com/petabenyu'}><Fa name='twitter-square' className="color"  />  Twitter</Link>
                        </div>
                      </div>
                      <div className="footer-copyright">
                          &#169; Copyright 2017. All Rights Reserved
                          <Link to="/">www.petabenyu.com</Link>
                      </div>
                  </div>
               </div>
            </div>
        )
    }
}

export default Foot;
