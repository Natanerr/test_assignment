// Dependancy
import React from "react";

//Components
import CategoryTitle from "../main/CategoryTitle/CategoryTitle.js";
import Cards from "../main/Cards/Cards.js";
import CartWindow from "../main/CartWindow/CartWindow.js";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.searchValue,
    };
  }

  render() {
    return (
      <div>
        <CategoryTitle categoryName={this.props.categoryName} />

        <h2>
          {this.props.searchValue
            ? `Trying to find: "${this.props.searchValue}"`
            : "Our merchandise"}
        </h2>

        <div className="inputChange">
          <input
            onChange={this.props.searchInput}
            value={this.props.searchValue}
            placeholder="Find..."
          />
          {this.props.searchValue && (
            <p onClick={() => console.log(this.props)}>x</p>
          )}
        </div>

        <div className="cardsWrapper">
          {this.props.items
            .filter((obj) => obj.title.includes(this.props.searchValue))
            .map((obj, index) => (
              <Cards
                key={index}
                onRouteToNewPage={(obj) => this.props.routeToNewPage(obj)}
                onAddToCart={(obj) => this.props.addToCart(obj)}
                {...obj}
              />
            ))}
        </div>

        {this.props.isCartOpened ? (
          <CartWindow
            removeFromCart={this.props.removeFromCart}
            closeCart={this.props.cartOpener}
            cartItems={this.props.cartItems}
            counter={this.props.counter}
          />
        ) : null}
      </div>
    );
  }
}

export default Home;
