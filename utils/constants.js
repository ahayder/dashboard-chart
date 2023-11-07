export const chartTypeToKey = {
  bar: "barChart",
  boxplot: "boxWhiskerPlot",
  scatter: "scatterChart",
  arearange: "areaRangeChart",
};

export const chartKeyToType = {
  barChart: "bar",
  boxWhiskerPlot: "boxplot",
  scatterChart: "scatter",
  areaRangeChart: "arearange",
};

export const dropdownOptions = [
  {
    key: chartKeyToType.barChart,
    text: "Bar Chart",
    value: chartKeyToType.barChart,
  },
  {
    key: chartKeyToType.boxWhiskerPlot,
    text: "Box and Whisker Plot",
    value: chartKeyToType.boxWhiskerPlot,
  },
  {
    key: chartKeyToType.scatterChart,
    text: "Scatter Chart",
    value: chartKeyToType.scatterChart,
  },
  {
    key: chartKeyToType.areaRangeChart,
    text: "Area Range Chart",
    value: chartKeyToType.areaRangeChart,
  },
];

export const breakpoints = { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 };
export const columns = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 };
