import React, {useEffect, useReducer, useState} from "react";
import {useBooks} from "./BookProvider";
import Book from "./Book";

export default function BookList() {
  const {books} = useBooks();

  return (
    <>
      <ul className="list">
        {[...books].reverse().map((book) => {
          return <li key={book._id}><Book {...book} /></li>;
        }
        )}
      </ul>
    </>
  );
}