import React, { Component } from "react";
import BookDetail from "./BookDetail";
import BookForm from "./BookForm";

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          year: 1925,
        },
        { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
        {
          title: "One Hundred Years of Solitude",
          author: " Gabriel García Márquez",
          year: 1967,
        },
        { title: "A Passage to India", author: "E. M. Forster", year: 1924 },
        { title: "Invisible Man", author: "H.G. Wells", year: 1897 },
        { title: "American Psycho", author: "Bret Easton Ellis", year: 1991 },
        { title: "Frankenstein", author: "Mary Shelley", year: 1818 },
      ],
    };
  }

  handleAddBook = (newBook) => {
    this.setState((prevState) => ({
      books: [...prevState.books, newBook],
    }));
  };

  handleDeleteBook = (index) => {
    this.setState((prevState) => ({
      books: prevState.books.filter((_, i) => i !== index),
    }));
  };

  render() {
    return (
      <div>
        <BookForm onAddBook={this.handleAddBook} />
        {this.state.books.length === 0 ? (
          <p>No books available. Add a book using the form above.</p>
        ) : (
          <ul>
            {this.state.books.map((book, index) => (
              <li key={index}>
                <BookDetail
                  title={book.title}
                  author={book.author}
                  year={book.year}
                  description={book.description}
                  onDelete={() => this.handleDeleteBook(index)}
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default BookList;
