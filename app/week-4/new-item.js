"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (change) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + change;
      return newQuantity >= 1 && newQuantity <= 20 ? newQuantity : prevQuantity;
    });
  };

  return (
    <div className="p-4 bg-amber-600 rounded-lg shadow-md text-center">
      <p className="text-xl font-bold mb-4">Quantity: {quantity}</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => updateQuantity(-1)}
          disabled={quantity === 1}
          className="px-4 py-2 bg-red-500 text-white rounded disabled:opacity-50"
        >
          -
        </button>
        <button
          onClick={() => updateQuantity(1)}
          disabled={quantity === 20}
          className="px-4 py-2 bg-green-500 text-white rounded disabled:opacity-50"
        >
          +
        </button>
      </div>
    </div>
  );
}
