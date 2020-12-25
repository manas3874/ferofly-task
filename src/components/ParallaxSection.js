import React, { Component } from "react";

export default class ParallaxSection extends Component {
  render() {
    return (
      <div className="parallax-section-container">
        <div className="parallax-section-container__img-wrapper" id="parallax">
          {this.props.content ? <p>content exists</p> : null}
        </div>
      </div>
    );
  }
}
