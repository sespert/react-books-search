import React from "react";
import DeleteButton from "../DeleteButton";
import "./style.css";

function MediaSave(props) {
    return (
        <div>
            <div className="media border border-success rounded w-100">
                <img src={props.image} className="mr-3" alt="bookCover" />
                <div className="media-body">
                    <h5 className="mt-0">{props.title}</h5>
                    <h6 className="mt-0">{props.authors}</h6>
                    <p>{props.description}</p>
                </div>
                
                <a rel="noopener noreferrer" target="_blank" href={props.href} className="btn btn-success btn-block">View</a>
                <DeleteButton 
                    onClick={props.handleDeleteButton}
                    id={props.id}
                />
            </div>
            
        </div>
  );
}

export default MediaSave;