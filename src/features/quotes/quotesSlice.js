/*
 *   Copyright (c) 2025 David Kirkcaldy
 *   All rights reserved.
 */

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchQuotes = createAsyncThunk(
  'quotes/fetchQuotes',
  async () => {
    const response = await (new Promise((resolve) => resolve(fetch('http://api.quotable.io/quotes'))));
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results.map(quote => ({
      id: quote._id,
      text: quote.content,
      author: quote.author,
    }));
  }
);


const initialState = {
  quotes: {},
  status: 'idle',
  error: null,
};
const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase('quotes/fetchQuotes/pending', (state) => {
        state.status = 'loading';
      })
      .addCase('quotes/fetchQuotes/fulfilled', (state, action) => {
        state.status = 'succeeded';
        state.quotes = action.payload;
      })
      .addCase('quotes/fetchQuotes/rejected', (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const selectQuotes = (state) => state.quotes.quotes;

export default quotesSlice.reducer;
