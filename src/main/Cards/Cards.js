import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

class Cards extends React.Component {
  onAddToCart = () => {
    return this.props.onAddToCart(this.props);
  };

  onRouteToNewPage = () => {
    return this.props.onRouteToNewPage(this.props);
  };

  render() {
    return (
      <div onClick={this.onRouteToNewPage} className="card">
        <Link to="/merchandise">
          <img alt="our shop goods" src={this.props.imageUrl} />
        </Link>
        <img
          alt="cartImage"
          className="shopCart"
          src={"./images/cart.png"}
          onClick={this.onAddToCart}
        />
        <p>{this.props.title}</p>
        <p className="price"> {this.props.price} </p>
      </div>
    );
  }
}

export default Cards;
