import React from "react";
import SaveButton from "../SaveButton";
// import "./style.css";

//Exports Cards components

function Card(props) {
    return (
        <div className="card text-left">
            <img src={props.image} className="App-logo" alt="logo" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-title">{props.author}</h6>
                <p className="card-text">{props.synopsis}</p>
                <a href="/" className="btn btn-success">View</a>
                {/* <a href="/" className="btn btn-success">Delete</a> */}
                <SaveButton />
            </div>
        </div>
    );
}

export default Card;