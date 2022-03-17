import React, { useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);
  const [findItem, setFindItem] = useState("");

  useEffect( () => {
    fetch(`http://localhost:6001/listings`)
    .then(r => r.json())
    .then(data => setListings(data));
  }, []);

  function handleDeleteItem(deletedItem){
    const newListing = listings.filter(item => item.id !== deletedItem.id);
    setListings(newListing);
  }

  function onFindChange(e){
    setFindItem(e.target.value);
    //console.log(findItem);
  }


  const findListing = listings.filter(item => {
    if(findItem.length > 0){
      return item.description.includes(findItem)
    }
    else{
      return true;
    }
  });

  return (
    <div className="app">
      <Header 
      findItem={findItem}
      onFindChange={onFindChange}
      />
      <ListingsContainer 
      listings={findListing}
      handleDeleteItem={handleDeleteItem}
      />
    </div>
  );
}

export default App;
