import React from "react";
import "./style.css";

function SearchFrom() {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="breed">Search</label>
        <input
          name="breed"
          list="breeds"
          type="text"
          className="form-control"
          placeholder="Type here"
          id="breed"
        />
      </div>
    </form>
  );
}

export default SearchFrom