import React, { useState } from "react";

const SingleItem = ({ item, removeItem, editItem }) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.completed && "Line-through",
        }}
      >
        {item.name}
      </p>
      <button
        type='button'
        className='btn remove-btn'
        onClick={() => removeItem(item.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default SingleItem;
