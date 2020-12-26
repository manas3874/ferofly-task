import React, { Component } from "react";
import Button from "./Button";
export default class NavBar extends Component {
  render() {
    return (
      <nav className="nav-bar">
        <ul className="nav-bar__list">
          <li className="nav-bar__list--active">HOME</li>
          <li>ABOUT</li>
          <li>ROOMS</li>
          <li>SERVICES</li>
          <li>GALLERY</li>
          <li>SEE & DO</li>
          <li>CONTACT</li>
          <Button link="Book a Room" color="white" versions="white" />
        </ul>
      </nav>
    );
  }
}
