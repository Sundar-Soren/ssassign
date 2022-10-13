import React from "react";
import "./Footer.scss";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter, BsYoutube } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer_container">
        <img
          src="https://www.drift.com/wp-content/themes/drift-rebrand/dist/images/drift-logo-reg_c55e841e.svg"
          alt=""
        />
        <div className="links">
          <ul>
            <p> PLATFORM</p>
            <li> Conversation Cloud</li>
            <li> Conversational Marketing</li>
            <li>Conversational Sales</li>
            <li>Conversational Service</li>
            <li> Partners</li>
            <li>Integrations</li>
            <li>Professional Services</li>
          </ul>
          <ul>
            <p> SOLUTIONS</p>
            <li> Customer Prospecting</li>
            <li> Deal Management</li>
            <li>Conversational Sales</li>
            <li>Conversational Service</li>
            <li> Partners</li>
            <li>Integrations</li>
            <li>Professional Services</li>
          </ul>
          <ul>
            <p> PLATFORM</p>
            <li> Conversation Cloud</li>
            <li> Conversational Marketing</li>
            <li>Conversational Sales</li>
            <li>Conversational Service</li>
            <li> Partners</li>
            <li>Integrations</li>
            <li>Professional Services</li>
          </ul>
          <ul>
            <p> PLATFORM</p>
            <li> Conversation Cloud</li>
            <li> Conversational Marketing</li>
            <li>Conversational Sales</li>
            <li>Conversational Service</li>
            <li> Partners</li>
            <li>Integrations</li>
            <li>Professional Services</li>
          </ul>
          <ul>
            <p> PLATFORM</p>
            <li> Conversation Cloud</li>
            <li> Conversational Marketing</li>
            <li>Conversational Sales</li>
            <li>Conversational Service</li>
            <li> Partners</li>
            <li>Integrations</li>
            <li>Professional Services</li>
          </ul>
        </div>
        <div className="line"></div>
        <div className="socials">
          <ul className="media_links">
            <li>
              <FaFacebookF />
            </li>
            <li>
              <BsTwitter />{" "}
            </li>
            <li>
              <FaLinkedinIn />{" "}
            </li>
            <li>
              <FiInstagram />{" "}
            </li>
            <li>
              <BsYoutube />{" "}
            </li>
          </ul>
          <p>Terms</p>
          <p>Privacy Policy</p>
          <p>Drift Status</p>
          <p>Sitemap</p>
          <p>&#169; Copyright 2022 Drift.com, Inc. </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
