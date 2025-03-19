"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (!ingredient) return;

    const fetchMealIdeas = async () => {
      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
        );
        const data = await response.json();
        setMeals(data.meals || []);
      } catch (error) {
        console.error("Error fetching meal ideas:", error);
      }
    };

    fetchMealIdeas();
  }, [ingredient]);

  return (
    <div className="p-6 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Meal Ideas for {ingredient}</h2>
      {meals.length === 0 ? (
        <p>No meals found for this ingredient.</p>
      ) : (
        <ul className="space-y-4">
          {meals.map((meal) => (
            <li key={meal.idMeal} className="flex items-center space-x-4">
              <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 rounded-md" />
              <span className="text-lg font-semibold">{meal.strMeal}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}