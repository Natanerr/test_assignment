import React from "react";
import "./ButtonsTab.css";

class ButtonsTab extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fColorWoman: "",
      fColorMan: "",
      fColorKid: "",
      isChoosen: "",
    };
  }

  womanCategoryIsChoosen = () => {
    if (this.state.isChoosen === "Women") return;

    this.setState({
      fColorWoman: "#5ECE7B",
      fColorMan: "",
      fColorKid: "",
      isChoosen: "Women",
    });

    this.setState((prevState) => {
      return this.props.clickHandler(prevState.isChoosen);
    });
  };

  manCategoryIsChoosen = () => {
    if (this.state.isChoosen === "Man") return;

    this.setState({
      fColorMan: "#5ECE7B",
      fColorWoman: "",
      fColorKid: "",
      isChoosen: "Man",
    });

    this.setState((prevState) => {
      return this.props.clickHandler(prevState.isChoosen);
    });
  };

  kidCategoryIsChoosen = () => {
    if (this.state.isChoosen === "Kid") return;

    this.setState({
      fColorKid: "#5ECE7B",
      fColorWoman: "",
      fColorMan: "",
      isChoosen: "Kid",
    });

    this.setState((prevState) => {
      return this.props.clickHandler(prevState.isChoosen);
    });
  };

  render() {
    return (
      <div className="buttonsTab">
        <button
          className="Womens"
          style={{
            color: this.state.fColorWoman,
            fontWeight: this.state.isChoosen === "Women" ? "600" : "400",
          }}
          onClick={this.womanCategoryIsChoosen}
        >
          {" "}
          WOMEN{" "}
        </button>
        <div
          style={{
            visibility: this.state.isChoosen === "Women" ? "visible" : "hidden",
            width: this.state.isChoosen === "Women" ? "42%" : "0",
          }}
          id={"Women-underline"}
        ></div>

        <button
          className={"Mens"}
          style={{
            color: this.state.fColorMan,
            fontWeight: this.state.isChoosen === "Man" ? "600" : "400",
          }}
          onClick={this.manCategoryIsChoosen}
        >
          {" "}
          MAN{" "}
        </button>
        <div
          style={{
            visibility: this.state.isChoosen === "Man" ? "visible" : "hidden",
            width: this.state.isChoosen === "Man" ? "42%" : "0",
          }}
          id={"Men-underline"}
        ></div>

        <button
          className="Kids"
          style={{
            color: this.state.fColorKid,
            fontWeight: this.state.isChoosen === "Kid" ? "600" : "400",
          }}
          onClick={this.kidCategoryIsChoosen}
        >
          {" "}
          KIDS{" "}
        </button>
        <div
          style={{
            visibility: this.state.isChoosen === "Kid" ? "visible" : "hidden",
            width: this.state.isChoosen === "Kid" ? "42%" : "0",
          }}
          id={"Kid-underline"}
        ></div>
      </div>
    );
  }
}

export default ButtonsTab;
