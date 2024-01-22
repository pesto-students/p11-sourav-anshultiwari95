import React, { Component } from "react";
import "./styles.css";

class BookForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      year: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title, author, year } = this.state;
    this.props.onAddBook({ title, author, year });
    this.setState({ title: "", author: "", year: "" });
  };
  render() {
    return (
      <div>
        <form className="book-form" onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={this.state.author}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Year:
            <input
              type="text"
              name="year"
              value={this.state.year}
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default BookForm;
