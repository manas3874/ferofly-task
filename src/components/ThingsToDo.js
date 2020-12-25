import React, { Component } from "react";
import ContentCard from "./ContentCard";
export default class ThingsToDo extends Component {
  render() {
    return (
      <div className="things-to-do-section">
        <h2 className="things-to-do-section__header">OUR SERVICES</h2>
        <div className="things-to-do-section__grid">
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
