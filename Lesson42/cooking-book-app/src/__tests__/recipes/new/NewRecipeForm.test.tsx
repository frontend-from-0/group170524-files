import { render, screen, fireEvent } from "@testing-library/react";
import NewRecipeForm from "@/app/recipes/new/NewRecipeForm";
import { useActionState } from "react";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useActionState: jest.fn(),
}));

describe("NewRecipeForm component", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  
  it("should render validation errors when empty form is submitted", () => {
    (useActionState as jest.Mock).mockReturnValue([
      {
        success: false,
        message: "",
        errors: {
          strMeal: "Name of the meal is required.",
          strInstructions: "Instructions are required.",
          strMealThumb: "URL for the image is required.",
        },
        inputs: {},
      },
      jest.fn(),
      false,
    ]);

    render(<NewRecipeForm />);
    fireEvent.click(screen.getByTestId("submit-btn"));

    expect(screen.getByText("Name of the meal is required.")).toBeInTheDocument();
    expect(screen.getByText("Instructions are required.")).toBeInTheDocument();
    expect(screen.getByText("URL for the image is required.")).toBeInTheDocument();
  });
});
