import React from "react";
import axios from "axios";

export default function Book(props) {
  const deleteBook = () => {
    axios
      .delete(
        `https://caw-bookstore-api.herokuapp.com/book/${props.bookData.id}`
      )
      .then((response) => console.log("success", response));
  };

  return (
    <div className="book-info-container">
      <img src="../../static/assets/images/sot1cover.png" />
      <h2>{props.bookData.name}</h2>
      <h3>{props.bookData.author}</h3>
      <h5>{props.bookData.description}</h5>
      <p>{props.bookData.price}</p>
      <button onClick={deleteBook}>Delete Book</button>
    </div>
  );
}
