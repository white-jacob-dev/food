import { configureStore } from "@reduxjs/toolkit";
import SelectionCounterSlice from "./SelectionCounterSlice";
import StepCounterSlice from "./StepCounterSlice";

export default configureStore({
  reducer: {
    selectionCounter: SelectionCounterSlice,
    stepCounter: StepCounterSlice
  },
});
