import React from "react";

function Filter({ search, onSearchChange, onOptionChange }) {
  
  function handleSearchChange (event) {
    onSearchChange(event.target.value);
  }
  
  return (
    <div>
      <input type="text" name="search" placeholder="Search..." value={search} onChange={handleSearchChange}/>
      <select name="filter" onChange={onOptionChange}>
        <option value="All">All</option>
        <option value="2">Latest</option>
        <option value="1">Oldest</option>
      </select>
    </div>
  );
}

export default Filter;