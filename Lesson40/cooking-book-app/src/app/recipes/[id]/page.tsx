export default async function RecipeDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
  );

  const recipeData = await response.json();

  if (recipeData.meals === "Invalid ID")
    throw Error(`Invalid recipe ID requested, ${id}`);

  return (
    <div>
      Current recipe id is: {id}
      <h1>{recipeData.meals[0].strMeal}</h1>
      <img
        src={recipeData.meals[0].strMealThumb}
        alt={recipeData.meals[0].strMeal}
      />
      <p>{recipeData.meals[0].strInstructions}</p>
    </div>
  );
}
