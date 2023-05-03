import { createSlice } from "@reduxjs/toolkit";
import PostDTO, { defaultPost } from "../../interface/post.interface";
import { RootState } from "../../redux/reducers";

interface PostState {
  posts: Array<object>;
  post: PostDTO;
}

const initialState: PostState = {
  posts: [],
  post: defaultPost,
};
export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action) => {
      state.posts.push(...action.payload);
    },
    setPost: (state, action) => {
      state.post = action.payload;
    },
  },
});

export const { setPost, setPosts } = postSlice.actions;

export const selectPost = (state: RootState) => state;

export default postSlice.reducer;
