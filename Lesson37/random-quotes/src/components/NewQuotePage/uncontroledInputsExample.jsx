import { Title } from "../Title";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import {useEffect, useState} from 'react';

export const NewQuotePage = () => {
  const quotesCollectionRef = collection(db, "quote");
  const [formState, setFormState] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    setError,
    // Added reset function to reset the form
    reset,
    // Added isSubmitSuccessful from formState so that we only rest if everything went well
    formState: { errors, isSubmitSuccessful },
  } = useForm({defaultValues: {
    quote: '',
    author: ''
  }});

  async function onSubmit(data) {
    console.log("Form is submitted.", data);
    try {
      await addDoc(quotesCollectionRef, {
        id: Date.now(),
        quote: data.quote,
        author: data.author,
        likedBy: [],
        dislikedBy: [],
      });
      setFormState('Saved quote successfully.');
      // @Anna to check why the form did not reset after submit
    } catch (error) {
      // We can also use setError function from useForm instead of our own setFormState. This way we will have control over the form state (isSubmitSuccessful will be false in case of the error.) This would be a better approach than using our own state for the generic error.
      setError('root', {type: 'Server Error', message: 'Error saving the quote.'});
      console.error("Error saving the quote:", error);
      setFormState('Something when wrong, could not save the quote.')
    }
  }
  const author = watch('author');
  console.log(author);

  // We watch for the isSubmitSuccessful state using useEffect hook and rest the form once quote is added successfully 
  useEffect(()=> {
    if (isSubmitSuccessful) reset();
  }, [isSubmitSuccessful]);

  return (
    <>
      <Title>Add new quote</Title>
      {formState && <p>{formState}</p>}
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div>
          <label htmlFor="quote">Text of the quote</label>
          {/* Uncontrolled input */}
          <input
            type="text"
            id="quote"
            {...register("quote", {
              required: { value: true, message: "This field is reaquired." },
              pattern: {
                value: /^[A-Za-z\s.,!?'"-]+$/,
                message: "Quote can only contain letters.",
              },
              minLength: {
                value: 5,
                message: "Quote should be at least 5 characters long.",
              },
              maxLength: {
                value: 300,
                message: "Quote should be 300 characters longest.",
              },
            })}
          />
          {errors.quote && <p>{errors.quote.message}</p>}
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            {...register("author", { required: true })}
          />
          {errors.author && <p>This field is required</p>}
          {author.toLowerCase() === 'unknown' && <p>Are you sure that the author is not know?</p>}
        </div>
        <button type="submit">Save quote</button>
        <button type="reset">Reset form</button>
      </form>
    </>
  );
};
