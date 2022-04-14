import React from "react";
import { Link } from "react-router-dom";
import "./PricesAndValues.css";
import CartLogo from "./Cart/CartLogo.js";

class ValutesAndCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rotateArrow: false,
    };
  }

  rotateArrowDown = () => {
    this.setState({
      rotateArrow: "rotate(225deg)",
    });
  };

  rotateArrowUp = () => {
    this.setState({
      rotateArrow: "rotate(45deg)",
    });
  };

  rotateArrows = () => {
    this.setState({
      rotateArrow: !this.state.rotateArrow,
    });

    this.props.valutesOpener();
  };

  render() {
    return (
      <div className="valuteAndCart">
        <div className="valuteSign">
          <p>
            {" "}
            ${" "}
            <i
              style={{
                transform:
                  this.state.rotateArrow === true
                    ? "rotate(45deg)"
                    : "rotate(225deg)",
              }}
              onClick={this.rotateArrows}
              className="downArrow"
            ></i>
          </p>
        </div>

        <CartLogo cartOpener={this.props.cartOpener} />
        <Link to="/cartPage">
        <img alt="bag" src="/images/bag.png" className="bag" />
        </Link>
      </div>
    );
  }
}

export default ValutesAndCart;
