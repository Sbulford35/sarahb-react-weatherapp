import React from "react";
import "./SunriseSet.css";

export default function BarPressure(props) {

  let pressure = props.data.pressure;
  if (pressure > 1030) {
 return (
    <div className="BarPressure">
      <p>
       Pressure: High
      </p>
     </div>
    );
  } else {
      <p>
       Pressure: Low
      </p>
 }
}
