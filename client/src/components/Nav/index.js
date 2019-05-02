import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <a className="navbar-brand" href="/">Google Book Search</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/">Search Books</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/books">View Saved Books</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default Nav;