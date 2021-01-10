import React from "react";
import "./SunsetAndRise.css";

export default function Sunset(props) {

let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
 }

  return (
    <div className="Sunset">
      <p>
        Sunset:<br />
        {hours}:{minutes}pm
      </p>
      </div>
  );
}