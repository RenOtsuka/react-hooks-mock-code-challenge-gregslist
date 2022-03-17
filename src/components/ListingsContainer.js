import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDeleteItem}) {

  //console.log(listings)

  const gregList = listings.map(item => (
      <ListingCard 
      key={item.id}
      item={item}
      handleDeleteItem={handleDeleteItem}
      />
  ));

  return (
    <main>
      <ul className="cards">
        {gregList}
      </ul>
    </main>
  );
}

export default ListingsContainer;
