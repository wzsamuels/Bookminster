import React, {useEffect, useReducer, useState} from 'react';
import BookList from "./BookList";
//import noCover from "../../img/book_red.svg";
import './ui/custom.scss'
import AddPostForm from './AddBookForm';
import NavBar from './navbar';
import { config, useSpring, animated } from 'react-spring'

export default function App() {
  const [isBookFormVisible, toggleBookFormVisible] = useReducer(isBookFormVisible => !isBookFormVisible, false);

  const fadeIn = useSpring({
    config: { ...config.molasses },
    from: { opacity: 0 },
    to: {
      opacity: 1 ? 1 : 0,
      //height: 1 ? height : 0
    }
  });

  return (
    <>
      <animated.div style={{ ...fadeIn, overflow: "hidden" }}>
        <NavBar clickAdd={toggleBookFormVisible}/>
        <div className="container main">      
          { isBookFormVisible && <AddPostForm onSubmitCancel={toggleBookFormVisible}/>}
          <br/>
          <BookList/>
        </div>
      </animated.div>
    </>
  );
}

/*
{ isBookFormVisible
        ? <AddBookForm onSubmitCancel={toggleBookFormVisible}/>
        : <button className="button-submit mb-5" onClick={toggleBookFormVisible}>Add Book</button>
      }
 */