import React from "react";

function Search({findItem, onFindChange}) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={findItem}
        onChange={onFindChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
