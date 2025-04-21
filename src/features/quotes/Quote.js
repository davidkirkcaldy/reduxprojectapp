/*
 *   Copyright (c) 2025 David Kirkcaldy
 *   All rights reserved.
 */
import React, {useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import quote selector
import { fetchQuotes, selectQuotes } from './quotesSlice.js';


const Quote = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchQuotes());
    }, [dispatch]);

    const quotes = useSelector(selectQuotes);
    let quote = quotes[Math.floor(Math.random() * quotes.length)];
    if (!quote) {
        quote = {
            text: "The only limit to our realization of tomorrow is our doubts of today.",
            author: "Franklin D. Roosevelt"
        }
    }
  return (
    <div className="quote">
      <p>{quote.text}</p>
      <p>- {quote.author}</p>
    </div>
  );
}
export default Quote;