import React, {useEffect, useReducer, useState} from 'react';
import BookList from "./BookList";
//import noCover from "../../img/book_red.svg";
import './ui/custom.scss'
import AddPostForm from './AddBookForm';
import NavBar from './navbar';

export default function App() {
  const [isBookFormVisible, toggleBookFormVisible] = useReducer(isBookFormVisible => !isBookFormVisible, false);

  return (
    <>
      <NavBar clickAdd={toggleBookFormVisible}/>
      <div className="container main">      
      { isBookFormVisible && <AddPostForm onSubmitCancel={toggleBookFormVisible}/>}
      <br/>
      <BookList/>
      </div>
    </>
  );
}

/*
{ isBookFormVisible
        ? <AddBookForm onSubmitCancel={toggleBookFormVisible}/>
        : <button className="button-submit mb-5" onClick={toggleBookFormVisible}>Add Book</button>
      }
 */