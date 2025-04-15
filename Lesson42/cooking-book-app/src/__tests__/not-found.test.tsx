import { render, screen } from "@testing-library/react";
import NotFound from "@/app/not-found";

describe("Page not found", () => {
  it("render text content correctly", () => {
    render(<NotFound />);

    const heading = screen.getByRole("heading", { level: 1 });
    const link = screen.getByTestId("link");

    expect(link).toHaveTextContent("Take me to the homepage");
    expect(link).toHaveAttribute("href", "/");

    expect(heading).toHaveTextContent("Page Not Found");
  });

  it("render image correctly", () => {
    render(<NotFound />);

    const image = screen.getByTestId("image");

    // TODO: replace src value with a regex
    expect(image).toHaveAttribute(
      "src",
      "/_next/image?url=%2Fconfused-chef.jpg&w=640&q=75",
    );
    expect(image).toHaveAttribute(
      "alt",
      "a confused chef looking at a cooking book",
    );
  });
  describe("Snapshot", () => {
    it("renders Not Found page unchanged", () => {
      const { container } = render(<NotFound />);
      expect(container).toMatchSnapshot();
    });
  })
});
