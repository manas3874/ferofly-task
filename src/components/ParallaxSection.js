import React, { Component } from "react";
import Button from "./Button";
export default class ParallaxSection extends Component {
  render() {
    const src = this.props.src;
    return (
      <div className="parallax-section-container">
        <div
          className="parallax-section-container__img-wrapper"
          id="parallax"
          style={{ backgroundImage: `url(${src})` }}
        >
          {this.props.content ? (
            <div className="parallax-section-container__content">
              <h2 className="parallax-section-container__content--header">
                {this.props.header}
              </h2>
              <i className="parallax-section-container__content--details">
                I'm a paragraph. Click here to add your own text and edit me.
                I’m a great place for you to tell a story and let your users
                know a little more about you.
              </i>
              <Button link="Book a Room" color="black" versions="black" />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
