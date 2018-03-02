import React from 'react';
import "./SearchBar.css";
const SearchBar = () => (
    <div className="input-group mb-10">
        <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-default">Search</span>
        </div>
        <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
    </div>

);

export default SearchBar;