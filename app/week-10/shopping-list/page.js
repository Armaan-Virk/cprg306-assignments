"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();
  const router = useRouter();

  // Load shopping list items from Firestore
  useEffect(() => {
    if (!user) {
      router.push("/week-10"); // redirect to login if not logged in
      return;
    }

    const loadItems = async () => {
      const userItems = await getItems(user.uid);
      setItems(userItems);
    };

    loadItems();
  }, [user]);

  // Handle adding a new item to Firestore
  const handleAddItem = async (newItem) => {
    const id = await addItem(user.uid, newItem);
    setItems([...items, { ...newItem, id }]);
  };

  // Handle selecting an item to show meal ideas
  const handleItemSelect = (itemName) => {
    const cleanedName = itemName
      .split(",")[0]
      .replace(/[\u{1F300}-\u{1FAD6}]/gu, "")
      .trim();
    setSelectedItemName(cleanedName);
  };

  if (!user) return null; // Avoid rendering until user is available

  return (
    <main className="p-4 bg-gray-100 min-h-screen flex gap-8">
      <div className="w-1/2">
        <h1 className="text-3xl font-bold mb-4 text-center text-purple-700">Shopping List</h1>

        <div className="mb-6 p-4 bg-white shadow-md rounded-md">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Add New Item</h2>
          <NewItem onAddItem={handleAddItem} />
        </div>

        <div className="p-4 bg-white shadow-md rounded-md">
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
      </div>

      <div className="w-1/2">
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Meal Ideas for{" "}
            <span className="text-blue-600 font-bold">{selectedItemName || "..."}</span>
          </h2>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
