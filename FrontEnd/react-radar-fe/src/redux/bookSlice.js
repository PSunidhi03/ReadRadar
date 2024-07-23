// src/redux/bookSlice.js
import { createSlice } from '@reduxjs/toolkit';

const bookSlice = createSlice({
  name: 'books',
  initialState: {
    bookList: [],
    searchResults: [],
  },
  reducers: {
    setBookList: (state, action) => {
      state.bookList = action.payload;
    },
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setBookList, setSearchResults } = bookSlice.actions;
export default bookSlice.reducer;
