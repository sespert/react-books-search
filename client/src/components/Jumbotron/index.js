import React from "react";
import "./style.css";

function Jumbotron () {
    return (
        <div className="jumbotron" style={{ height: 300, textAlign: "center"}}>
            <h1>Nice Google Books Search</h1>
            <hr className="my-4"/>
            <h4>Search for books in the Google Books database, then save your favorites to a list to be displayed whenever you need them</h4>
        </div>
    );
}

export default Jumbotron;