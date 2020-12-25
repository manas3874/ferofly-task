import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-section">
        <h2 className="contact-section__header">CONTACT US</h2>
        <ul className="contact-section__details">
          <li>tripathimanas98@gmail.com</li>
          <li>/</li>
          <li>Mumbai, Maharashtra</li>
          <li>/</li>
          <li>Ph. +91 79779 84255</li>
        </ul>
        <form action="POST" className="contact-section__form">
          <div className="contact-section__form--name-and-email">
            <input type="text" className="contact-section__form--name" />
            <input type="text" className="contact-section__form--email" />
          </div>
          <input type="text" className="contact-section__form--subject" />
          <input type="text" className="contact-section__form--message" />
          <button className="contact-section__form--btn">Send</button>
        </form>
      </div>
    );
  }
}
