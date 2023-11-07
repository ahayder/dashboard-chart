export const chartConfig = {
  barChart: {
    chart: {
      type: "bar",
    },
    title: {
      text: "Sample Bar Chart",
    },
    xAxis: {
      categories: ["Apples", "Bananas", "Oranges"],
    },
    yAxis: {
      title: {
        text: "Fruit eaten",
      },
    },
    series: [
      {
        name: "Jane",
        data: [1, 0, 4],
      },
      {
        name: "John",
        data: [5, 7, 3],
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
    xAxis: {
      categories: ["Apples", "Bananas", "Oranges"],
    },
    yAxis: {
      title: {
        text: "Fruit eaten",
      },
    },
    series: [
      {
        name: "Jane",
        data: [
          [1, 3, 5, 7, 9],
          [2, 4, 6, 8, 10],
        ],
      },
      {
        name: "John",
        data: [
          [5, 7, 9, 11, 13],
          [6, 8, 10, 12, 14],
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
    xAxis: {
      title: {
        text: "X Axis",
      },
    },
    yAxis: {
      title: {
        text: "Y Axis",
      },
    },
    series: [
      {
        name: "Series 1",
        data: [
          [1, 2],
          [2, 3],
          [3, 4],
        ],
      },
      {
        name: "Series 2",
        data: [
          [4, 5],
          [5, 6],
          [6, 7],
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
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yAxis: {
      title: {
        text: "Temperature (°C)",
      },
    },
    series: [
      {
        name: "Temperature",
        data: [
          [0, 10, 20],
          [1, 15, 25],
          [2, 20, 30],
          [3, 25, 35],
          [4, 30, 40],
          [5, 35, 45],
        ],
      },
    ],
  },
};

export const defaultChartConfig = {
  barChart: {
    chart: {
      type: "bar",
    },
    title: {
      text: "Sample Bar Chart",
    },
    xAxis: {
      categories: ["Apples", "Bananas", "Oranges"],
    },
    yAxis: {
      title: {
        text: "Fruit eaten",
      },
    },
    series: [
      {
        name: "Jane",
        data: [1, 0, 4],
      },
      {
        name: "John",
        data: [5, 7, 3],
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
    xAxis: {
      categories: ["Apples", "Bananas", "Oranges"],
    },
    yAxis: {
      title: {
        text: "Fruit eaten",
      },
    },
    series: [
      {
        name: "Jane",
        data: [
          [1, 3, 5, 7, 9],
          [2, 4, 6, 8, 10],
        ],
      },
      {
        name: "John",
        data: [
          [5, 7, 9, 11, 13],
          [6, 8, 10, 12, 14],
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
    xAxis: {
      title: {
        text: "X Axis",
      },
    },
    yAxis: {
      title: {
        text: "Y Axis",
      },
    },
    series: [
      {
        name: "Series 1",
        data: [
          [1, 2],
          [2, 3],
          [3, 4],
        ],
      },
      {
        name: "Series 2",
        data: [
          [4, 5],
          [5, 6],
          [6, 7],
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
    xAxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    yAxis: {
      title: {
        text: "Temperature (°C)",
      },
    },
    series: [
      {
        name: "Temperature",
        data: [
          [0, 10, 20],
          [1, 15, 25],
          [2, 20, 30],
          [3, 25, 35],
          [4, 30, 40],
          [5, 35, 45],
        ],
      },
    ],
  },
};
