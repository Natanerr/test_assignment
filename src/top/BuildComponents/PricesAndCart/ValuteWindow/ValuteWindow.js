import React from "react";
import "./ValuteWindow.css";

class ValuteChoosing extends React.Component {
  render() {
    return (
      <div className="valuteChoosWindow">
        <ul className="valutes">
          <li>$ USD</li>
          <li>€ EUR</li>
          <li>¥ JPY</li>
        </ul>
      </div>
    );
  }
}

export default ValuteChoosing;
