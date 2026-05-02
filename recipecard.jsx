export default function RecipeCard({ meal }) {
  return (
    <div className="card">
      <h3>{meal.strMeal}</h3>
      <img src={meal.strMealThumb} />
    </div>
  );
}