import React from "react";
import Search from "./Search";

function Header({findItem, onFindChange}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
      findItem={findItem}
      onFindChange={onFindChange}
      />
    </header>
  );
}

export default Header;
