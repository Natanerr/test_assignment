import React from "react";
import "./Cards.css";
import { Link } from "react-router-dom";

class Cards extends React.Component {

  render() {
    const { handleClick, road, item } = this.props
    return (
      <div onClick={road} className="card">
        <Link to="/merchandise">
          <img alt="our shop goods" src={item.imageUrl} />
        </Link>
        <img
          alt="cartImage"
          className="shopCart"
          src={"./images/cart.png"}
          onClick={() => handleClick(item)}
        />
        <p>{item.title}</p>
        <p className="price"> {item.price} </p>
      </div>
    );
  }
}

export default Cards;
