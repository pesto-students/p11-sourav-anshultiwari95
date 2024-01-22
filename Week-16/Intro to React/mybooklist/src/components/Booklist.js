import React from "react";
import Book from "./Book";

const BookList = () => {
  const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
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
  ];

  return (
    <div>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <Book title={book.title} author={book.author} year={book.year} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
