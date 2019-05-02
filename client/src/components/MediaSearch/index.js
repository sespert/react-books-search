import React from "react";
import SaveButton from "../SaveButton";
import "./style.css";

function MediaSearch(props) {
    return (
        <div>
            <div className="media border border-success rounded">
                <img src={props.image} className="mr-3" alt="bookCover" />
                <div className="media-body">
                    <h5 className="mt-0">{props.title}</h5>
                    <h6 className="mt-0">{props.authors}</h6>
                    <p>{props.description}</p>
                </div>
                
                <a rel="noopener noreferrer" target="_blank" href={props.href} className="btn btn-success">View</a>
                <SaveButton 
                    onClick={props.handleSaveButton}
                    id={props.id}                
                />
            </div>
            
        </div>
  );
}

export default MediaSearch;