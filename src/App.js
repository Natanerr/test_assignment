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
      counter: 1,
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
      .get("https://62287d409fd6174ca8258785.mockapi.io/Cartlist")
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

  addToCart = async (obj) => {
    try {
      if (
        this.state.cartItems.find(
          (cart) => Number(cart.parentId) === Number(obj.parentId)
        )
      ) {
        this.setState((prev) => ({
          counter: prev.counter + 1,
        }));
      } else {
        const { data } = await axios.post(
          "https://62287d409fd6174ca8258785.mockapi.io/Cartlist",
          obj
        );
        console.log(obj);
        this.setState((prevState) => ({
          cartItems: [...prevState.cartItems, data],
        }));
      }
    } catch (error) {
      console.log(error);
    }
  };

  removeFromCart = (id) => {
    this.setState((prev) => ({
      cartItems: prev.cartItems.filter((item) => item.id !== id),
    }));

    axios.delete(`https://62287d409fd6174ca8258785.mockapi.io/Cartlist/${id}`);
  };

  searchInput = (event) => {
    this.setState({
      searchValue: event.target.value,
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
                searchInput={this.searchInput}
                searchValue={this.state.searchValue}
                removeFromCart={this.removeFromCart}
                addToCart={this.addToCart}
                items={this.state.items}
                cartItems={this.state.cartItems}
                isCartOpened={this.state.isCartOpened}
                cartOpener={this.cartOpener}
                categoryName={this.state.categoryName}
                categoryTitle={this.categoryTitle}
                routeToNewPage={this.routeToNewPage}
                counter={this.state.counter}
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
