import React from "react";
// import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveButton(props) {
  return (
    <span className="btn btn-success" {...props} role="button" tabIndex="0">
      Save
    </span>
    // <a href="/" className="btn btn-success">Delete</a>

  );
}

export default SaveButton;