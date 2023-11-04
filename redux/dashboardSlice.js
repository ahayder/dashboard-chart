import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialState,
  reducers: {
    changeChartType: (state, action) => {
      const { key, type } = action.payload;
      state[key].chart.type = type;
    },
    updateTitle: (state, action) => {
      const { key, title } = action.payload;
      state[key].title.text = title;
    },
  },
});

export const { changeChartType, updateTitle } = dashboardSlice.actions;
export default dashboardSlice.reducer;
