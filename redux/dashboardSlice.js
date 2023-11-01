import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    barChart: {
      chart: {
        type: "bar",
      },
      title: {
        text: "Sample Bar Chart",
      },
      series: [
        {
          data: [1, 2, 3, 4, 5],
        },
      ],
    },
    boxWhiskerPlot: {
      chart: {
        type: "boxplot",
      },
      title: {
        text: "Sample Box and Whisker Plot",
      },
      series: [
        {
          data: [
            [760, 801, 848, 895, 965],
            [733, 853, 939, 980, 1080],
          ],
        },
      ],
    },
    scatterChart: {
      chart: {
        type: "scatter",
      },
      title: {
        text: "Sample Scatter Chart",
      },
      series: [
        {
          data: [
            [1, 2],
            [2, 4],
            [3, 6],
          ],
        },
      ],
    },
    areaRangeChart: {
      chart: {
        type: "arearange",
      },
      title: {
        text: "Sample Area Range Chart",
      },
      series: [
        {
          data: [
            [1, 2, 3],
            [2, 3, 4],
            [3, 4, 5],
          ],
        },
      ],
    },
  },
  reducers: {
    changeChartType: (state, action) => {
      state[action.payload.key].chart.type = action.payload.type;
    },
    updateTitle: (state, action) => {
      state[action.payload.key].title.text = action.payload.title;
    },
  },
});

export const { changeChartType, updateTitle } = dashboardSlice.actions;
export default dashboardSlice.reducer;
