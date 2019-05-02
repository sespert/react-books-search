import React from "react";

function Form(props) {
  return (     
        <div className="form-group">
            <h5>Book Search</h5>
            <label htmlFor="book">Book Name</label>
            <input type="text" className="form-control" {...props}/>
        </div>
  )
}

export default Form;