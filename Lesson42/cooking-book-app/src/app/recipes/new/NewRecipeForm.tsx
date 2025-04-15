"use client";

import { saveRecipe } from "@/app/actions/recipes";
import { NewRecipeFormState } from "@/types/recipes";
import { Field, Input, Label, Textarea } from "@headlessui/react";
import Form from "next/form";
import { useActionState } from "react";

const initialState: NewRecipeFormState = {
  success: false,
  message: "",
};

const NewRecipeForm = () => {
  const [state, action, isPending] = useActionState(saveRecipe, initialState);

  console.log('State is', state);

  console.log("Is pending", isPending);

  return (
    <Form action={action} noValidate className="text-left">
      <Field className="flex flex-col my-4">
        <Label>Name of the meal</Label>
        <Input
          name="strMeal"
          required
          className="dark:border-gray-100 border border-rounded p-2"
          aria-describedby="strMeal-error"
          defaultValue={state?.inputs?.strMeal}
        />
        {
          state?.errors?.strMeal && (
            <p id="strMeal-error" className="text-red-500">{state.errors.strMeal}</p>
          )
        }
      </Field>

      <Field className="flex flex-col my-4">
        <Label>Instructions</Label>
        <Textarea
          name="strInstructions"
          required
          className="dark:border-gray-100 border border-rounded p-2"
          defaultValue={state?.inputs?.strInstructions}
        />
        {
          state?.errors?.strInstructions && (
            <p className="text-red-500">{state.errors.strInstructions}</p>
          )
        }
      </Field>

      <Field className="flex flex-col my-4">
        <Label>URL for the image</Label>
        <Input
          name="strMealThumb"
          required
          className="dark:border-gray-100 border border-rounded p-2"
          defaultValue={state?.inputs?.strMealThumb}
        />
        {
          state?.errors?.strMealThumb && (
            <p className="text-red-500">{state?.errors?.strMealThumb}</p>
          )
        }
      </Field>

      <button type="submit" data-testid="submit-btn">Save recipe</button>
    </Form>
  );
};

export default NewRecipeForm;
