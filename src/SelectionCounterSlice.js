import { createSlice } from "@reduxjs/toolkit";

export const SelectionCounterSlice = createSlice({
  name: "selectionCounter",
  initialState: {
    value: 0,
  },
  reducers: {
    selectionIncrement: (state) => {
      state.value += 1;
    },
    selectionDecrement: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectionIncrement, selectionDecrement } = SelectionCounterSlice.actions;

export default SelectionCounterSlice.reducer;
