import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "store";

interface QuestionModalState {
  isOpen: boolean;
}

const initialState: QuestionModalState = {
  isOpen: false
};

const questionModalSlice = createSlice({
  name: "questionModal",
  initialState,
  reducers: {
    onQuestionModalOpen: (state) => {
      state.isOpen = true;
    },
    onQuestionModalClose: (state) => {
      state.isOpen = false;
    }
  }
});

export const { onQuestionModalClose, onQuestionModalOpen } =
  questionModalSlice.actions;

export const selectQuestionModal = (state: RootState) => state.questionModal;
export default questionModalSlice.reducer;
