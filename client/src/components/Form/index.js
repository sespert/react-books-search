import React from "react";

// This file exports the Input, TextArea, and FormBtn components

function Form(props) {
  return (
      <form>
        <div className="form-group">
            <h5>Book Search</h5>
            <label for="book">Book Name</label>
            <input type="text" className="form-control" {...props}/>
        </div>
        <button type="submit" className="btn btn-success">Search</button>
    </form>
  )
}


export default Form;