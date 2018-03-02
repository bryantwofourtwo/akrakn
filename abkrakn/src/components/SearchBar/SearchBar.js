import React from 'react';
import "./SearchBar.css";
const SearchBar = () => (
    <div className="container">
    <div className="input-group mb-8">
        <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-small">Search</span>
        </div>
        <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
    </div>
    </div>

);

export default SearchBar;