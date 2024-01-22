import React, { Component } from "react";
import "./styles.css";

class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }

  handleToggleDetails = () => {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  };

  render() {
    const { title, author, year, description, onDelete } = this.props;

    return (
      <div className="book-container">
        <h3>{title}</h3>
        <p>Author: {author}</p>
        <p>Year: {year}</p>
        <button onClick={this.handleToggleDetails}>
          {this.state.showDetails ? "Hide Details" : "Show Details"}
        </button>
        {this.state.showDetails && <p>{description}</p>}
        <button className="book-delete" onClick={onDelete}>
          Delete
        </button>
      </div>
    );
  }
}

export default BookDetail;
