import { createSlice } from "@reduxjs/toolkit";
import { chartConfig, defaultChartConfig } from "../utils/chart-config";
import { grid_layout_config } from "../utils/grid-layout-config";
import { chartTypeToKey } from "../utils/constants";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    chartConfig: chartConfig,
    layout: grid_layout_config,
    breakPoint: "lg",
    openSettingsKey: null,
  },
  reducers: {
    changeChartType: (state, action) => {
      const { key, type } = action.payload;
      const newChartKey = chartTypeToKey[type];

      // Here I am assuming that each chart position is fixed to the initial layout
      // If I change the chart type to any other chart
      // And then agina if I want to select the default chart in the same position
      // It will show the default chart again
      if (key === newChartKey) {
        state.chartConfig[key] = { ...defaultChartConfig[key] };
      } else {
        const newChartConfig = state.chartConfig[newChartKey];
        state.chartConfig[key] = { ...newChartConfig };
      }
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
    setOpenSettingsKey: (state, action) => {
      state.openSettingsKey =
        state.openSettingsKey === action.payload ? null : action.payload;
    },
  },
});

export const {
  changeChartType,
  updateTitle,
  setBreakPoint,
  updateLayout,
  setOpenSettingsKey,
} = dashboardSlice.actions;
export default dashboardSlice.reducer;
