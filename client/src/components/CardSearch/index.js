import React from "react";
import SaveButton from "../SaveButton";

//Exports Cards components

function CardSearch(props) {
    return (
        <div className="card text-left">
            <img src={props.image} className="App-logo" alt="logo" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h6 className="card-title">{props.authors}</h6>
                <p className="card-text">{props.description}</p>
                <a rel="noopener noreferrer" target="_blank" href={props.href} className="btn btn-success">View</a>
                <SaveButton 
                    onClick={props.handleSaveButton}
                    id={props.id}
                    
                />
            </div>
        </div>
    );
}

export default CardSearch;