"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddItem({ name, quantity, category });
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Item Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full p-2 border rounded-md" />
        </div>
        <div>
          <label className="block font-medium">Quantity</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))} min="1" className="w-full p-2 border rounded-md" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">Add Item</button>
      </form>
    </div>
  );
}
