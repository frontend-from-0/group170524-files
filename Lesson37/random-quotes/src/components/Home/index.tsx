import { QuoteBox } from "../QuoteBox";
import { Title } from "../Title";
import { useState, useEffect } from "react";
import { getDocs, collection} from "firebase/firestore";
import {db} from '../../firebase/config';
import { Quote } from "../../models/quote";

export const Home = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [quoteIndex, setQuoteIndex] = useState<number>(0);
  const getRandomQuoteIndex = ():number => Math.floor(Math.random() * quotes.length);

  const quotesCollectionRef = collection(db, 'quotes');

  useEffect(() => {
    const getQuotes = async () => {
      try {
        const data = await getDocs(quotesCollectionRef);
        const quotes = data.docs.map(doc => doc.data()) as Quote[];
        setQuotes(quotes);
      } catch (error) {
        console.error("Error getting quotes:", error);
      }
    };
    getQuotes();

  }, []);

  function handleNewQuoteClick() {
    setQuoteIndex(getRandomQuoteIndex());
  }

  if (quotes.length === 0) return <p>Loading...</p>;

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
