import { render, screen } from "@testing-library/react";
import Loading from "@/app/loading";

describe("Loading page", () => {
  it("renders a heading", () => {
    render(<Loading />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });

  it("renders placeholder items", () => {
    render(<Loading />);

    const placeholderList = screen.getByTestId("placeholder-list");
    const placeholderItems = screen.getAllByTestId("placeholder-item");

    expect(placeholderList).toBeInTheDocument();
    expect(placeholderItems.length).toBe(16);
  });

  describe("Snapshot", () => {
    it("renders loading page unchanged", () => {
      const { container } = render(<Loading />);
      expect(container).toMatchSnapshot();
    });
  })
});

// test('Loading page is rendered correctly', () => {
//   render(<Loading />);

//   const heading = screen.getByRole('heading', { level: 1 });

//   expect(heading).toBeInTheDocument();
// })
