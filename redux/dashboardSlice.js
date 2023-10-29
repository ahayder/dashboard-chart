import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    chartType: {
      barChart: "bar",
      boxWhiskerPlot: "box",
      scatterChart: "scatter",
      areaRangeChart: "area",
    },
    chartTitle: {
      barChart: "Bar Chart",
      boxWhiskerPlot: "Box and Whisker Plot",
      scatterChart: "Scatter Chart",
      areaRangeChart: "Area Range Chart",
    },
  },
  reducers: {
    changeChartType: (state, action) => {
      state.chartType[action.payload.key] = action.payload.type;
    },
    updateTitle: (state, action) => {
      state.chartTitle[action.payload.key] = action.payload.title;
    },
  },
});

export const { changeChartType, updateTitle } = dashboardSlice.actions;
export default dashboardSlice.reducer;
