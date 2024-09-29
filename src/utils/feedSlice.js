import { createSlice } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeFeed: (state, action) => {
      return null;
    },
  },
});

export const { addFeed } = feedSlice.actions;

export default feedSlice.reducer;
