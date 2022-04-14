// Dependancy
import React from "react";
import "./Merchandise.css";

//Components
import CartWindow from "../main/CartWindow/CartWindow";

class Merchandise extends React.Component {
  render() {
    return (
      <>
        {this.props.isCartOpened ? (
          <CartWindow
            cartItems={this.props.cartItems}
            closeCart={this.props.closeCart}
            onRemoveItem={this.props.removeFromCart}
          />
        ) : null}
        <div className="additionalImages">
          <img alt="second" src={this.props.image} width={140} height={140} />

          <img alt="third" src={this.props.image} width={140} height={140} />

          <img alt="fourth" src={this.props.image} width={140} height={140} />
        </div>
        <div>
          <img
            alt="merchandise"
            className="merchImage"
            src={this.props.image}
          />
          <div className="infoWrapper">
            <div>
              <h1 className="merchTitle">{this.props.title}</h1>
            </div>
            <p className="merchSize">SIZE:</p>
            <div className="sizes">
              <div className="sizeBox">XS</div>
              <div className="sizeBox">S</div>
              <div className="sizeBox">M</div>
              <div className="sizeBox">L</div>
            </div>
            <div>
              <p className="merchPrice">PRICE:</p>
              <p className="merchPriceNumber">{this.props.price}</p>
            </div>
            <button className="addToCart" onClick={this.props.addToCart}>
              ADD TO CART
            </button>
            <p className="description">
              Find stunning women's cocktail dresses and party dresses. Stand
              out in lace and metallic cocktail dresses and party dresses from
              all your favorite brands.
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Merchandise;
