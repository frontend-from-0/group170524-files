import { Title } from "../Title";
import { useState } from "react";

export const NewQuotePage = () => {
  const [quote, setQuote] = useState("");
  const [quoteError, setQuoteError] = useState("");

  const [author, setAuthor] = useState("");
  const [authorError, setAuthorError] = useState("");


  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form is submitted.");
    console.log("Text of the new quote is: ", quote);
    console.log("Author is: ", author);

    if (quote.trim().length < 5) {
      setQuoteError('The quote is too short, please try again with a longer one');
    }
    if (author.trim().length < 3) {
      setAuthorError('The name of the author is too short, it should be at least 3 character.');
    }
  }

  return (
    <>
      <Title>Add new quote</Title>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="quote">Text of the quote</label>
          {/* Controlled input */}
          <input
            type="text"
            id="quote"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
          />
          {quoteError && <p>{quoteError}</p>}
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          {authorError && <p>{authorError}</p>}
        </div>
        <button type="submit">Save quote</button>
        <button type="reset">Reset form</button>
      </form>
    </>
  );
};
