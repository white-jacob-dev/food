import { createSlice } from "@reduxjs/toolkit";

export const StepCounterSlice = createSlice({
  name: "stepCounter",
  initialState: {
    value: 0,
  },
  reducers: {
    stepIncrement: (state) => {
      state.value += 1;
    }, 
  },
});

// Action creators are generated for each case reducer function
export const { stepIncrement } = StepCounterSlice.actions;

export default StepCounterSlice.reducer;
