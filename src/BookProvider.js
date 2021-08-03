import React, {createContext, useState, useContext, useEffect} from "react";
import {useFetch, fetchDelete} from "./lib/usefetch";
const BookContext = createContext({});
export const useBooks = () => useContext(BookContext);

export default function BookProvider({ children }) {
  const [books, setBooks] = useState();
    // Fetch the posts via the API
  const {
    loading,
    data,
    error
  } = useFetch('api/list');

  // Update the post data when it changes
  useEffect(() => {
    setBooks(data);
    console.log(data);
  },[data]);

  // Add a new post to data held in memory (database is updated with fetch)
  const addBook = ({_id, title, author, cover, published, summary}) => {
    const newbook = {
      _id,
      title,
      author,
      published,
      summary,
      cover
    }
    console.log(JSON.stringify(newbook));
    setBooks([
      ...books,
      newbook 
    ])};



  const updateBook = (id, props) => {
    let book = books.filter(book => book.id === id)
    book = book[0];
    setBooks(books.filter(book => book.id !== id));
    console.log(JSON.stringify(book) + "\n" + JSON.stringify(books, null, 4))
    for(const prop in props) {
      book[prop] = props[prop];
    }
    setBooks([...books, book]);
  }

  const removeBook = _id => {
    setBooks(books.filter(book => book._id !== _id));
    fetchDelete('api/delete', _id)
      .then(() => console.log(`Book ${_id} deleted`));
  }

  if (loading) return <h1>loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;

  return (
    <BookContext.Provider value={{ books, addBook, removeBook, updateBook }}>
      {children}
    </BookContext.Provider>
  );
}