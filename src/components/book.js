import React from 'react';

export default function Book(props) {
  return (
    <div className="book-card">
      {/* <div className="cover-image">
        <img src="../../static/assets/images/sot1cover.png" />
      </div> */}
      <div className="book-info-container">
        <h2>{props.bookData.name}</h2>
        <h3>{props.bookData.author}</h3>
        <h5>{props.bookData.description}</h5>
        <p>{props.bookData.price}</p>
        
      </div>
    </div>
  )
}
