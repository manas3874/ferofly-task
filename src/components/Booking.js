// import React, { Component } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
// export default class Booking extends Component {
//   render() {
//     console.log()
//     return (
//       <div className="booking-bar">
//         <Calendar />
//       </div>
//     );
//   }
// }

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Button from "./Button";

export default function Booking() {
  const [fromValue, fromOnChange] = useState(new Date());
  const [toValue, toOnChange] = useState(new Date());
  const [adults, AdultsOnChange] = useState();
  const [kids, KidsOnChange] = useState();
  const options = ["1", "2", "3", "4"];

  const fromTime = (from) => {
    var fromTimeArray = from.split(" ");
    fromTimeArray = fromTimeArray.slice(0, 4);
    fromTimeArray = fromTimeArray.map((item) => {
      return item + " ";
    });
    return fromTimeArray;
  };
  const toTime = (to) => {
    var toTimeArray = to.split(" ");
    toTimeArray = toTimeArray.slice(0, 4);
    toTimeArray = toTimeArray.map((item) => {
      return item + " ";
    });
    return toTimeArray;
  };

  return (
    <div className="booking-section">
      <main className="booking-section__from">
        <h2 className="booking-section__from--header">Check In</h2>
        <Calendar onChange={fromOnChange} value={fromValue} />
      </main>
      <main className="booking-section__to">
        <h2 className="booking-section__to--header">Check Out</h2>
        <Calendar onChange={toOnChange} value={toValue} />
      </main>
      <div className="booking-section__book-now">
        <div className="booking-section__book-now--dropdown">
          <Dropdown
            options={options}
            onChange={AdultsOnChange}
            value={adults}
            placeholder="Adults"
          />
          <Dropdown
            options={options}
            onChange={KidsOnChange}
            value={kids}
            placeholder="Kids"
          />
        </div>
        <div className="booking-section__book-now--details">
          <h2>From - {fromTime(fromValue.toString())}</h2>
          <h2>To - {toTime(toValue.toString())}</h2>
        </div>
        <Button link="Search" versions="black" color="black" />
      </div>
      ;
    </div>
  );
}
