import React, {useEffect, useReducer, useState} from "react";
import { useBooks } from "./BookProvider";

export default function Book({ _id, title, author, summary, published, slug, cover}) {
  const [isSmallView, setSmallView] = useReducer(isSmallView => !isSmallView, true);
  const {removeBook} = useBooks();

  return (
    <>
      { isSmallView
        ?
          <div onClick={() => { setSmallView() }}>
            <img className="me-3" height={128} width={80} src={cover}/>
            <a href={slug}>{title}</a> by<span> </span>
            <span>{author}</span>
          </div>
        :
          <div onClick={() => {setSmallView()}}>
            <div className="container">
              <div className="row">
                <div className="col">
                  <img className="img-fluid"  src={cover}/>
                </div>
                <div className="col">
                  <p><a href={slug}>{title}</a> by {author}</p>
                  <p>Published: {published}</p>
                  <p><button className="button-cancel" onClick={() => removeBook(_id)}>Delete Book</button></p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col">
                  <p>Summary:</p>
                  <p>{summary}</p>
                </div>
              </div>
            </div>
          </div>
      }
      <hr className="rounded"/>
    </>
  );
}