import React, { Component } from "react";
import ContentCard from "./ContentCard";
export default class Services extends Component {
  render() {
    return (
      <div className="services-section">
        <h2 className="services-section__header">OUR SERVICES</h2>
        <div className="services-section__grid">
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
          <ContentCard />
        </div>
      </div>
    );
  }
}
