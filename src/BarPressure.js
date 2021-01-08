import React from "react";
import "./SunriseSet.css";

export default function BarPressure(props) {

  if (props.data.pressure > 1030) {
 return (
      <p>
       Pressure: High
      </p>
    );
  } else {
    return (
      <p>
       Pressure: Low
      </p>
    );
 }
}
