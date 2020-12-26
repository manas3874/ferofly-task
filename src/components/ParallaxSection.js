import React, { Component } from "react";

export default class ParallaxSection extends Component {
  render() {
    console.log(this.props);
    const src = this.props.src;
    return (
      <div
        className="parallax-section-container"
        id="parallax"
        style={{ backgroundImage: `url(${src})` }}
      >
        <div className="parallax-section-container__img-wrapper">
          {this.props.content ? <p>content exists</p> : null}
        </div>
      </div>
    );
  }
}
