import React, { Component } from "react";

export default class Button extends Component {
  render() {
    const versions = (versions) => {
      let arr = ["main-button"];
      arr.push(`main-button__${versions}`);
      // console.log(arr.join(" "));
      return arr.join(" ");
    };
    return (
      <p
        className={versions(this.props.versions)}
        href="#"
        style={{
          color: `${this.props.color}`,
          border: `1px solid ${this.props.color}`,
        }}
      >
        {this.props.link}
      </p>
    );
  }
}
