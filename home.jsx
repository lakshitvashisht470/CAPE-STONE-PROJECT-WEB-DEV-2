import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);

  const searchFood = async () => {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await res.json();
    setMeals(data.meals || []);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>🍽️ Food Recipe App</h1>

      <input
        placeholder="Search food..."
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      <button onClick={searchFood} style={{ padding: "8px 12px" }}>
        Search
      </button>

      <div style={{ marginTop: "20px" }}>
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            style={{
              border: "1px solid #ccc",
              margin: "15px auto",
              padding: "15px",
              width: "300px",
              borderRadius: "10px",
            }}
          >
            <h3>{meal.strMeal}</h3>

            {/* SMALL IMAGE */}
            <img
              src={meal.strMealThumb}
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            {/* RECIPE / INSTRUCTIONS */}
            <p style={{ fontSize: "12px", marginTop: "10px" }}>
              {meal.strInstructions}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}