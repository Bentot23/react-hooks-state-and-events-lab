import React, { useState } from "react";

function Item({ name, category }) {
  const [isClick, setIsClick] = useState(false)

  function handleClick() {
    setIsClick((isClick) => !isClick)
  }
  const color = isClick ? "pink" : "yellow";
  const itemClass = isClick ? "in-cart" : "";


  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" style={{ background: color }}onClick={handleClick}>{isClick ? 'Remove From Cart' : 'Add to Cart'}</button>
    </li>
  );
}

export default Item;
