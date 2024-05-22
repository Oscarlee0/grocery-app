import React, { useState } from "react";
import { toast } from "react-toastify";

const Forms = ({ addItems }) => {
  const [newItem, setNewItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) {
      toast.error("Add a Value");
      return;
    }
    addItems(newItem);
    setNewItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4>Grocery Bud</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type='submit' className='btn'>
          Add Item
        </button>
      </div>
    </form>
  );
};

export default Forms;
