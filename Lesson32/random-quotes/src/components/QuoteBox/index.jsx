import { UserContext, UserDispatchContext } from "../../UserContext";
import { useContext } from "react";

export function QuoteBox({ id, quote, author, onNewQuoteClick }) {
  const user = useContext(UserContext);
  const setUser = useContext(UserDispatchContext);

  function handleLike() {
    setUser((prevState) => {
      if (prevState.dislikedQuotes.includes) {
        const updatedDislikedQuotes = prevState.dislikedQuotes.filter(
          (dislikedQuoteId) => dislikedQuoteId !== id,
        );
        return {
          ...prevState,
          likedQuotes: [...prevState.likedQuotes, id],
          dislikedQuotes: updatedDislikedQuotes,
        };
      }
      return { ...prevState, likedQuotes: [...prevState.likedQuotes, id] };
    });
  }
  function handleDislike() {
    setUser((prevState) => {
      if (prevState.likedQuotes.includes) {
        const updatedLikedQuotes = prevState.likedQuotes.filter(
          (likedQuotesId) => likedQuotesId !== id,
        );
        return {
          ...prevState,
          dislikedQuotes: [...prevState.dislikedQuotes, id],
          likedQuotes: updatedLikedQuotes,
        };
      }
      return {
        ...prevState,
        dislikedQuotes: [...prevState.dislikedQuotes, id],
      };
    });
  }

  return (
    /* <></> is called Fragmet element and it's used to add a parent wrapper around element on the same level */
    <>
      <div>
        <p>{quote}</p>
        <span>{author}</span>
        <div>
          <button disabled={user.likedQuotes.includes(id)} onClick={handleLike}>
            Like {user.likedQuotes.includes(id) ? 1 : 0}
          </button>
          <button
            disabled={user.dislikedQuotes.includes(id)}
            onClick={handleDislike}
          >
            Dislike {user.dislikedQuotes.includes(id) ? 1 : 0}
          </button>
        </div>
      </div>
      <button onClick={onNewQuoteClick}>New Quote</button>
    </>
  );
}
