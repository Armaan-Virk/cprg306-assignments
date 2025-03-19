"use client";
import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, { ...newItem, id: Math.random().toString(36).substr(2, 9) }]);
  };

  const handleItemSelect = (itemName) => {
    const cleanedName = itemName.split(",")[0].replace(/[\u{1F300}-\u{1FAD6}]/gu, "").trim();
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="p-4 bg-gray-100 min-h-screen flex gap-8">
      <div className="w-1/2">
        <h1 className="text-2xl font-bold mb-4 text-center text-purple-600">Shopping List</h1>
        <div className="mb-6 p-4 bg-white shadow-md rounded-md">
          <NewItem onAddItem={handleAddItem} />
        </div>
        <div className="p-4 border-gray-200">
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
      </div>

      <div className="w-1/2">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}
