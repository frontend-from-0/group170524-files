import { recipesCollectionRef } from "@/store/firebase/config";
import { NewRecipeFormState } from "@/types/recipes";
import { addDoc } from "firebase/firestore";
import { z } from "zod";

const recipeSchema = z.object({
  strMeal: z
    .string()
    .min(2, { message: "Recipe name should be at least 2 characters long" }),
  strInstructions: z
    .string()
    .min(50, {
      message: "The instructions should be at least 50 characters long.",
    }),
  strMealThumb: z.string().url({ message: "Please enter a valid url." }),
});

export async function saveRecipe(prevState: NewRecipeFormState | null, formData: FormData) {
  console.log("Save recipe server action is called!", formData);
  const rawData = {
    strMeal: formData.get("strMeal") as string,
    strInstructions: formData.get("strInstructions") as string,
    strMealThumb: formData.get("strMealThumb") as string,
  };

  console.log("rawData", rawData);

  const validatedData = recipeSchema.safeParse(rawData);

  console.log("validatedData", validatedData);

  if (!validatedData.success) {
    return {
      success: false,
      message: "Please correct errors in the form.",
      errors: validatedData.error.flatten().fieldErrors,
      inputs: rawData,
    };
  }

  try {
    const docRef = await addDoc(recipesCollectionRef, {
      idMeal: Date.now().toString(),
      ...validatedData.data,
    });

    return {
      success: true,
      message: `Successfully added a recipe with id ${docRef.id} to the database.`,
      inputs: rawData,
    };
  } catch (error) {
    console.error("Error adding document:", error);
    return {
      success: false,
      message:
        "An error occurred while saving the recipe. Please try again later.",
      inputs: rawData,
    };
  }
}
