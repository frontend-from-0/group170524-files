import { db } from "./firebase/config";
import { Quote } from "./models/quote";
import { quotes as quotesData } from "./quotes";
import { addDoc, collection } from "firebase/firestore";

export const uploadQuotesScript = () => {
  const quotesCollectionRef = collection(db, "quotes");

  let counter = 0;
  quotesData.forEach(async (quoteData) => {
    try {
      const quote = { ...quoteData, likedBy: [], dislikedBy: []} as Quote;
      await addDoc(quotesCollectionRef, quote);
      counter++;
    } catch (error) {
      console.error("Error adding quote:", error);
    } finally {
      if (counter === quotesData.length) {
        console.log("All quotes added successfully");
      }
    }
  });
};
