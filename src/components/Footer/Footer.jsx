import React from "react";
import { FooterBox } from "./style";

function Footer() {
  return (
    <FooterBox>
      <div className="container">
        <div className="footer-list">
          <div className="footer-item">
            <h3 className="footer-name">Copyright 2020</h3>
            <p className="footer-text">
              Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
              Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in.
              Vivamus mattis eros at sem pulvinar tincidunt.
            </p>
          </div>
          <div className="footer-item">
            <h3 className="footer-name">Sayt sahifalari</h3>
            <div className="footer-items">
              <a href="#" className="footer-link">
                Bosh sahifa
              </a>
              <a href="#" className="footer-link">
                Xizmatlar
              </a>
              <a href="#" className="footer-link">
                Kontaktlar
              </a>
            </div>
          </div>
        </div>
      </div>
    </FooterBox>
  );
}

export default Footer;
