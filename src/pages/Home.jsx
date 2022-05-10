// Dependancy
import React from "react";

//Components
import CategoryTitle from "../main/CategoryTitle/CategoryTitle.js";
import Cards from "../main/Cards/Cards.js";
import CartWindow from "../main/CartWindow/CartWindow.js";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: []
    };
  }

  handleClick = (item) => {
    if(this.state.cart.indexOf(item) !== -1) return;
    this.setState((prevState) => ({
      cart: [...prevState.cart, item]
    }))
  };

  handleChange = (item, d) => {
    const ind = this.state.cart.indexOf(item);
    const arr = this.state.cart

    if (arr[ind].amount === 0) {
      arr[ind].amount = 1;
      this.setState(() => ({  
        cart: [...arr]
      }))
      axios.post("https://62287d409fd6174ca8258785.mockapi.io/cartlist",this.state.cart)
    } else {
      arr[ind].amount += d;
      this.setState(() => ({  
        cart: [...arr]
      }))
    }
  }

  handleRemove = (id) => {
   const array = this.state.cart.filter(item => item.id !== id)
   
   this.setState({
     cart: array
   })

    this.handlePrice();
  };

  handlePrice = () => {
    let ans = 0;
    this.state.cart.map((item) => (ans += item.amount * item.price));

    this.setState((prevState) => ({
      price: prevState.price,
      ans
    }));
  };

  render() {
    const { products } = this.props;
    return (
      <React.Fragment>

      <div>
        <CategoryTitle categoryName={this.props.categoryName} />

        <div className="cardsWrapper">
        {products.map((item) => (
              <Cards
                key={item.id}
                item={item}
                handleClick={this.handleClick}
                cartItems={this.state.cart}
              />
            ))}
        </div>

        {this.props.isCartOpened ? (
          <CartWindow
            closeCart={this.props.cartOpener}
            cartItems={this.state.cart}
            handleChange={this.handleChange}
            handleRemove={this.handleRemove}
            handlePrice={this.handlePrice}
          />
        ) : null}
      </div>
      </React.Fragment>
    );
  }
}

export default Home;
