import React, { Component } from "react";

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
          <li className="nav-bar__list--book-a-room-btn">BOOK A ROOM</li>
        </ul>
      </nav>
    );
  }
}
