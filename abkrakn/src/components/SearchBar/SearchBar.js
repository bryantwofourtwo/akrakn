import React from 'react';
import "./SearchBar.css";

const SearchBar = () => (
    <div className="container">
    <div className="input-group mb-3">
        <div className="input-group-prepend">
            <button className="btn btn-outline-dark" type="button">Search</button>
        </div>
        <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
    </div>
    </div>

);

export default SearchBar;