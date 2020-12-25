import React, { Component } from "react";

export default class ContentCard extends Component {
  render() {
    return (
      <div className="content-card">
        <img src="" alt="" className="content-card__img" />
        <h2 className="content-card__header">Breakfast</h2>
        <p className="content-card__content">
          I'm a paragraph. Click here to add your own text and edit me.
        </p>
      </div>
    );
  }
}
