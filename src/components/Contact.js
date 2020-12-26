import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-section">
        <h2 className="contact-section__header">CONTACT US</h2>
        <ul className="contact-section__details">
          <li>
            <i>tripathimanas98@gmail.com</i>
          </li>
          <li>/</li>
          <li>
            <i>Mumbai, Maharashtra</i>
          </li>
          <li>/</li>
          <li>
            <i>Ph. +91 79779 84255</i>
          </li>
        </ul>
        <form action="POST" className="contact-section__form">
          <div className="contact-section__form--name-and-email">
            <input
              type="text"
              className="contact-section__form--name"
              placeholder="Name *"
              required
            />
            <input
              type="text"
              className="contact-section__form--email"
              placeholder="Email *"
              required
            />
          </div>
          <input
            type="text"
            className="contact-section__form--subject"
            placeholder="Subject"
            required
          />
          <input
            type="text"
            className="contact-section__form--message"
            placeholder="Message"
            required
          />
          <button className="contact-section__form--btn">Send</button>
        </form>
      </div>
    );
  }
}
