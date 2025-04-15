import Link from "next/link";
import Image from "next/image";

export default async function HomePage() {
  const data: Response = await new Promise((resolve) => {
    setTimeout(() =>
      resolve(
        fetch(
          "https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast",
        )),
      1000,
      );
  });
  const recipes = await data.json();

  return (
    <div className="text-center my-8">
      <h1>Home Page</h1>
      <p>Welcome to the Cooking Book App</p>

      <ul className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-between">
        {recipes &&
          // TODO: remove the next line one type is added for recipe
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          recipes.meals.map((recipe: any) => {
            return (
              <li key={recipe.idMeal} className="max-w-3xs my-4">
                <Link href={`/recipes/${recipe.idMeal}`}>
                  <h2>{recipe.strMeal}</h2>
                  <Image
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    width={300}
                    height={300}
                  />
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}
