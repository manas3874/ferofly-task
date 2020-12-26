import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="about-section">
        <h2 className="about-section__top">ABOUT</h2>
        <p className="about-section__bottom">
          <i>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere you like on your page. I’m a great place for you to tell a
            story and let your users know a little more about you.
          </i>
        </p>
      </div>
    );
  }
}
