import React from "react";
import "./Category.css";

class CategoryTitle extends React.Component {
  render() {
    return (
      <div className="CategoryName">
        {this.props.categoryName
          ? this.props.categoryName + `'s category`
          : "Choose your category"}
      </div>
    );
  }
}

export default CategoryTitle;
