import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/reducers";

interface PostState {
  value: number;
}

const initialState: PostState = {
  value: 0,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = postSlice.actions;

export const selectPost = (state: RootState) => state.post;

export default postSlice.reducer;
