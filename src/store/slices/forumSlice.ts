import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "store";

interface ForumState {
  value: number;
}

const initialState: ForumState = {
  value: 0
};

const forumSlice = createSlice({
  name: "forum",
  initialState,
  reducers: {}
});

export const selectforum = (state: RootState) => state.forum.value;
export default forumSlice.reducer;
