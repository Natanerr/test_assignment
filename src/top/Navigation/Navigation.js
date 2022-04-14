//Dependancy
import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

//Components
import ButtonsTab from "../BuildComponents/ButtonsTab/ButtonsTab.js";
import Logo from "../BuildComponents/Logo/Logo.js";
import ValutesAndCart from "../BuildComponents/PricesAndCart/PricesAndValues";
import ValuteChoosing from "../BuildComponents/PricesAndCart/ValuteWindow/ValuteWindow";

//Class
class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Choose Category",
      isCartOpened: false,
      isValutesOpened: false,
    };
  }

  updateTitle = (value) => {
    this.setState({ title: value });

    this.setState((prevState) => {
      return this.props.categoryTitle(prevState.title);
    });
  };

  openValutes = () => {
    this.setState({
      isValutesOpened: !this.state.isValutesOpened,
    });
  };

  render() {
    return (
      <nav className="navigation">
        <ButtonsTab clickHandler={this.updateTitle} />
        <Link to="/">
          <Logo />
        </Link>
        <ValutesAndCart
          valutesOpener={this.openValutes}
          cartOpener={this.props.cartOpener}
        />
        {this.state.isValutesOpened ? <ValuteChoosing /> : null}
      </nav>
    );
  }
}

export default Navigation;
