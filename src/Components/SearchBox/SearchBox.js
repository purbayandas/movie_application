import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import "./SearchBox.css"

import React from "react";

function SearchBox({onInputChange}) {
  return (
    <>
      <FloatingLabel
        controlId="floatingInput"
        label="Search Box"
        className="col-md-4"
        onChange = {(e) => {onInputChange(e.target.value)}}
      >
        <Form.Control type="text" placeholder="Movie Namwe" />
      </FloatingLabel>
      
    </>
  );
}

export default SearchBox;