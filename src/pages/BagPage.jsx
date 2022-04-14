import React from "react";
import "./Bag.css";

class BagPage extends React.Component {
  render() {
    return (
      <>
        <h1 className="bagTitle">CART</h1>
        <div className="bagPage">
          {this.props.cartItems.map((item, index) => (
            <div className="bagCard">
              <img
                alt="bag card"
                width={150}
                height={190}
                src={item.imageUrl}
                className="bagImage"
              />
              <p>{item.title}</p>
              <p>{item.price}</p>
              <div className="sizes">
                <button className="sizeBox">S</button>
                <button className="sizeBox">M</button>
              </div>
              <div>
                <div className="bagBtn __plus">+</div>
                <div className="bagBtn __counter">1</div>
                <div className="bagBtn __minus">-</div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default BagPage;
