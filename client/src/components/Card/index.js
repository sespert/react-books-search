import React from "react";
import DeleteButton from "../DeleteButton";

//Exports Cards components

function Card(props) {
    return (
        <div className="card text-left">
            <img src={props.image} className="App-logo" alt="logo" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-title">{props.authors}</h6>
                <p className="card-text">{props.synopsis}</p>
                <a rel="noopener noreferrer" target="_blank" href={props.href} className="btn btn-success">View</a>
                <DeleteButton 
                    onClick={props.handleDeleteButton}
                    id={props.id}
                />
            </div>
        </div>
    );
}

export default Card;

