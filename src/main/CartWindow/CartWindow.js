import React from "react";
import "./CartWindow.css";

class CartWindow extends React.Component {
  render() {
    const { cartItems, handleRemove, handleChange } = this.props;
    return (
      <div className="shadow">
        <div className="CartWindow">
          <h1 className="bag">My Bag, {cartItems.length} items</h1>

          {cartItems.length > 0 ? (
            <>
              {cartItems.map((item) => {
                return (
                  <div key={item.id} className="cartItem">
                    <div className="cartItemName">
                      <p>{item.title}</p>
                    </div>
                    <p className="cartItemPrice">${item.price}</p>
                    <img
                      alt="cart Merchandise"
                      width={135}
                      height={141}
                      src={item.imageUrl}
                    />

                    <button
                      className="cartItemButtons __plusBtn"
                      onClick={() => handleChange(item, 1)}
                    >
                      +
                    </button>
                   <div className="cartItemButtons __counter">
                      {item.amount}
                   </div>
                    <button
                      onClick={() => item.amount === 1 ? handleRemove(item.id) : handleChange(item, -1)}
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
