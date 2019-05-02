import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteButton(props) {
  return (
    <button className="btn btn-success" {...props}>
      Delete
    </button>

  );
}

export default DeleteButton;