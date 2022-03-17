import React, {useState} from "react";

function ListingCard({item, handleDeleteItem}) {
  const {id, description, image, location} = item;

  const[isFavorited, setIsFavorited] = useState(false);

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then(r => r.json())
    .then(() => handleDeleteItem(item));
  }

  function handleFavorited(){
    setIsFavorited( (isFavorited) => !isFavorited);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorited ? (
          <button className="emoji-button favorite active" onClick={handleFavorited}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorited}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
