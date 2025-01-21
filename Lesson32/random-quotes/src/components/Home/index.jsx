import { quotes as quotesData } from "../../quotes";
import { QuoteBox } from "../QuoteBox";
import { Title } from "../Title";
import { useState } from "react";

export const Home = () => {
  const [quotes, setQuotes] = useState(quotesData);
  const [quoteIndex, setQuoteIndex] = useState(0);
  // const [likeCount, setLikeCount] = useState(0);
  const getRandomQuoteIndex = () => Math.floor(Math.random() * quotes.length);

  function handleNewQuoteClick() {
    setQuoteIndex(getRandomQuoteIndex());
  }

  return (
    <>
      <Title>Random Quotes</Title>
      <QuoteBox
        id={quotes[quoteIndex].id}
        quote={quotes[quoteIndex].quote}
        author={quotes[quoteIndex].author}
        onNewQuoteClick={handleNewQuoteClick}
      />
    </>
  );
};
