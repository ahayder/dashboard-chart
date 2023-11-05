import { createSlice } from "@reduxjs/toolkit";
import { chartConfig } from "../utils/chart-config";
import { grid_layout_config } from "../utils/grid-layout-config";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    chartConfig: chartConfig,
    layout: grid_layout_config,
    breakPoint: "lg",
  },
  reducers: {
    changeChartType: (state, action) => {
      const { key, type } = action.payload;
      state.chartConfig[key].chart.type = type;
    },
    updateTitle: (state, action) => {
      const { key, title } = action.payload;
      state.chartConfig[key].title.text = title;
    },
    setBreakPoint: (state, action) => {
      state.breakPoint = action.payload;
    },
    updateLayout: (state, action) => {
      const { breakpoint, newLayout } = action.payload;
      state.layout[breakpoint] = newLayout;
    },
  },
});

export const { changeChartType, updateTitle, setBreakPoint, updateLayout } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
