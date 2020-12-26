import React, { Component } from "react";
import Breakfast from "../icons/Breakfast";
import Garden from "../icons/Garden";
import Pool from "../icons/Pool";
import Wifi from "../icons/Wifi";
import Housekeeping from "../icons/Housekeeping";
import Dining from "../icons/Dining";
export default class ContentCard extends Component {
  render() {
    const imageRender = (string) => {
      if (string == "Breakfast") {
        return <Breakfast />;
      } else if (string == "Garden") {
        return <Garden />;
      } else if (string == "Pool") {
        return <Pool />;
      } else if (string == "Wifi") {
        return <Wifi />;
      } else if (string == "Housekeeping") {
        return <Housekeeping />;
      } else if (string == "Dining") {
        return <Dining />;
      }
    };
    return (
      <div className="content-card">
        <div className="content-card__image">
          {this.props.image ? imageRender(this.props.srcAttribute) : null}
        </div>
        <h2 className="content-card__header">{this.props.srcAttribute}</h2>
        <p className="content-card__content">
          <i> I'm a paragraph. Click here to add your own text and edit me.</i>
        </p>
      </div>
    );
  }
}
