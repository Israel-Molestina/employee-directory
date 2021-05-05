import React from "react";
import "./style.css";

function SearchFrom(props) {
  console.log(props)
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="search">Search</label>
        <input
          onChange={props.handleInputChange}
          name="search"
          type="text"
          className="form-control"
          placeholder="Type here"
          id="search"
        />
      </div>
    </form>
  );
}

export default SearchFrom;
