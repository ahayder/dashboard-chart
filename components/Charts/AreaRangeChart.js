import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const AreaRangeChart = () => {
  const options = {
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
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default AreaRangeChart;
