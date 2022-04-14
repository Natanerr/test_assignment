import React from "react";
import "./CartWindow.css";

class CartWindow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
    };
  }

  plusCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  minusCounter = () => {
    this.setState((prevState) => ({
      counter: prevState.counter - 1,
    }));
  };

  render() {
    return (
      <div className="shadow">
        <div className="CartWindow">
          <h1 className="bag">My Bag, {this.props.cartItems.length} items</h1>

          {this.props.cartItems.length > 0 ? (
            <>
              {this.props.cartItems.map((obj) => {
                return (
                  <div key={obj.id} className="cartItem">
                    <div className="cartItemName">
                      <p>{obj.title}</p>
                    </div>
                    <p className="cartItemPrice">${obj.price}</p>
                    <img
                      alt="cart Merchandise"
                      width={135}
                      height={141}
                      src={obj.imageUrl}
                    />

                    <button
                      className="cartItemButtons __plusBtn"
                      onClick={this.plusCounter}
                    >
                      +
                    </button>
                    <button className="cartItemButtons __counter">
                      {this.state.counter}
                    </button>
                    <button
                      onClick={
                        this.state.counter === 0
                          ? this.props.removeFromCart(obj.id)
                          : this.minusCounter
                      }
                      className="cartItemButtons __minusBtn"
                    >
                      -
                    </button>
                    <button className="cartItemButtons __mediumBtn" disabled>
                      M
                    </button>
                    <button className="cartItemButtons __smallBtn">S</button>
                  </div>
                );
              })}

              <ul className="total">
                <li>
                  <span>Total</span>
                  <div></div>
                  <b>$100</b>
                </li>
              </ul>

              <div className="cartButtons">
                <button className="viewBag">VIEW BAG</button>
                <button className="checkOut">CHECK OUT</button>
              </div>
            </>
          ) : (
            <div className="cartEmpty">
              <img
                alt="cart"
                width={100}
                height={100}
                src="./images/clearCart.png"
              />
              <h2>Cart is Emty</h2>
              <p>
                Currently you don't have anything to buy, add something to make
                an order.
              </p>
              <button className="arrowButton" onClick={this.props.closeCart}>
                <img
                  width={30}
                  height={30}
                  alt="arrow button"
                  src="./images/ArrowImage.png"
                />{" "}
                <p>Back</p>
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default CartWindow;
