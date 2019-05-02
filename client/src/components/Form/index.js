import React from "react";

function Form(props) {
  return (     
        <div className="form-group">
            <h3>Search by Book Title</h3>
            <input type="text" className="form-control" {...props}/>
        </div>
  )
}

export default Form;