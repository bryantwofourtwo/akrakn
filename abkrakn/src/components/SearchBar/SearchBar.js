import React from 'react';
import "./SearchBar.css";

const SearchBar = () => (
    <div className="container">
    <div className="col-md-8">
        <div className="input-group-prepend">
            <button className="btn btn-outline-dark" type="button">Search</button>
        </div>
        <input type="text" className="form-control" placeholder="global search" />
    </div>
    </div>

);

export default SearchBar;