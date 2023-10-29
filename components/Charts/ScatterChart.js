import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const ScatterChart = () => {
  const options = {
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
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default ScatterChart;
