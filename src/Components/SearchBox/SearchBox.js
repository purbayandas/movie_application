import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import "./SearchBox.css"
import OnInputChange from './OnChangeInput';
import React from "react";

function SearchBox() {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Search Box"
        className="col-md-4"
        onChange={OnInputChange}
      >
        <Form.Control type="text" placeholder="Movie Namwe" />
      </FloatingLabel>
      
    </>
  );
}

export default SearchBox;