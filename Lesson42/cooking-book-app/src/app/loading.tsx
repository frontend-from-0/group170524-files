export default function Loading() {
  const placeholderItems = Array.from({ length: 16 }, (_, i) => i);

  return (
    <div className="text-center my-8">
      <h1>Home Page</h1>

      <ul
        className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-between"
        data-testid="placeholder-list"
      >
        {placeholderItems.map((item) => {
          return (
            <li
              key={item}
              data-testid={`placeholder-item`}
              className="max-w-3xs my-4"
            >
              <div className="w-48 h-6 bg-gray-100 my-2 mx-auto rounded"></div>
              <div className="w-3xs h-64 bg-gray-100"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
