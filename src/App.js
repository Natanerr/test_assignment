//Dependancy
import React from "react";
import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

//Other components imports
import Navigation from "./top/Navigation/Navigation.js";
import Home from "./pages/Home";
import Merchandise from "./pages/Merchandise";
import BagPage from "./pages/BagPage";

//images

//class
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: null,
      isCartOpened: false,
      items: [],
      cartItems: [],
      searchValue: "",
      merchTitle: "",
      merchPrice: null,
      merchImageUrl: "",
    };
  }

  componentDidMount() {
    //uncomment if Axios doesen't work
    /*fetch('https://62287d409fd6174ca8258785.mockapi.io/itemlist')
    .then(res => {
      return res.json();
    })
    .then(json => {
      this.setState({
        items: json
      })
    })
    */

    axios
      .get("https://62287d409fd6174ca8258785.mockapi.io/itemlist")
      .then((res) =>
        this.setState({
          items: res.data,
        })
      );
    axios
      .get("https://62287d409fd6174ca8258785.mockapi.io/cartlist")
      .then((res) =>
        this.setState({
          cartItems: res.data,
        })
      );
  }

  categoryTitle = (title) => {
    this.setState({ categoryName: title });
  };

  cartOpener = () => {
    this.setState({
      isCartOpened: !this.state.isCartOpened,
    });
  };

  routeToNewPage = (obj) => {
    let { title, price, imageUrl } = obj;

    this.setState({
      merchTitle: title,
      merchPrice: price,
      merchImageUrl: imageUrl,
    });
  };

  render() {
    return (
      <div className="App">
        <Navigation
          cartOpener={this.cartOpener}
          categoryTitle={this.categoryTitle}
        />

        <Routes>
          <Route
            index
            element={
              <Home
                searchValue={this.state.searchValue}
                products={this.state.items}
                isCartOpened={this.state.isCartOpened}
                categoryName={this.state.categoryName}
                cartOpener={this.cartOpener}
                categoryTitle={this.categoryTitle}
                routeToNewPage={this.routeToNewPage}
                searchInput={this.searchInput}
              />
            }
          ></Route>
          <Route
            path="/merchandise"
            element={
              <Merchandise
                addToCart={this.addToCart}
                cartItems={this.state.cartItems}
                isCartOpened={this.state.isCartOpened}
                closeCart={this.cartOpener}
                removeFromCart={this.removeFromCart}
                title={this.state.merchTitle}
                price={this.state.merchPrice}
                image={this.state.merchImageUrl}
              />
            }
          ></Route>
          <Route
            path="/cartPage"
            element={<BagPage cartItems={this.state.cartItems} />}
          ></Route>
        </Routes>
      </div>
    );
  }
}

export default App;
