import React from "react";

function Footer() {
  return (
    <div>
      <div className="container-fluid fbg">
        <hr />
        <div className="row text-light">
          <div className="col ">
            <p className="text-secondary fw-bold">ABOUT</p>
            <p>Contact Us</p>
            <p>Careers</p>
            <p>Flipkart Stories</p>
            <p>Press</p>
            <p>Flipkart</p>
            <p>Corporate Information</p>
          </div>

          <div className="col">
            <p className="text-secondary fw-bold">HELP</p>
            <p>Payment</p>
            <p>Shipping</p>
            <p>Cancellation & Return</p>
            <p>FAQ</p>
            <p>Report Infringment</p>
          </div>

          <div className="col">
            <p className="text-secondary fw-bold">POLICY</p>
            <p>Return Policy </p>
            <p>Term of use</p>
            <p>Security</p>
            <p>Privacy</p>
            <p>Sitemap</p>
          </div>

          <div className="col">
            <p className="text-secondary fw-bold">SOCIAL</p>
            <p>Facebook </p>
            <p>Twitter</p>
            <p>Youtube</p>
          </div>

          <div className="col">
            <p className="text-secondary fw-bold">MAIL Us</p>
            <p>
              Dubai Main Rd,
              <br />
              Near car street,
              <br />
              Dubai
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Footer;
