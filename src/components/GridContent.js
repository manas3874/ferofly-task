import React, { Component } from "react";
// import Breakfast from "../icons/Breakfast";
import ContentCard from "./ContentCard";
export default class GridContent extends Component {
  render() {
    return (
      <div className="grid-section">
        <h2 className="grid-section__header">{this.props.header}</h2>
        <div className="grid-section__grid">
          <ContentCard image={this.props.image} srcAttribute="Breakfast" />
          <ContentCard image={this.props.image} srcAttribute="Garden" />
          <ContentCard image={this.props.image} srcAttribute="Pool" />
          <ContentCard image={this.props.image} srcAttribute="Wifi" />
          <ContentCard image={this.props.image} srcAttribute="Housekeeping" />
          <ContentCard image={this.props.image} srcAttribute="Dining" />
        </div>
      </div>
    );
  }
}
