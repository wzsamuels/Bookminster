 import React, {useEffect, useRef} from "react";
import { useInput } from "./lib/hooks";
import {fetchPost} from "./lib/usefetch";
import {useBooks} from "./BookProvider";
import { Modal, ModalBody } from "react-bootstrap";

export default function AddPostForm({onSubmitCancel}) {
  const [titleProps, resetTitle] = useInput("");
  const [authorProps, resetAuthor] = useInput("");
  const { addBook } = useBooks();

  // Focus on form when it renders
  const inputElement = useRef(null);
  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  // On submitting the form
  const submit = e => {
    e.preventDefault();
    onSubmitCancel();
    fetchPost('api/add', {title: titleProps.value, author: authorProps.value})
    .then(result => {
      if(result) {
        console.log(`POST result: ${JSON.stringify(result)}`)
        addBook(result);
      }
    }
  );
  resetTitle();
  resetAuthor();
  }

  // The post POST form

  return (
    <Modal show={true} onHide={onSubmitCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        <form method="POST" id="post-form" onSubmit={submit}>
        <ModalBody>
     
        <div className="mb-3">
            <label className="form-label">Title</label>
            <input {...titleProps} type="text" ref={inputElement} required
                className="form-control" maxLength="50"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Author (optional)</label>
          <input {...authorProps}  type="text" placeholder="Anonymous" className="form-control" />
        </div>
      
       </ModalBody>
       <Modal.Footer>
        <button  type="submit" className="button-submit">Submit</button>
        <button className="button-cancel m-3" onClick={onSubmitCancel}>Cancel</button>
        </Modal.Footer>
        </form>
      </Modal>
  );
}