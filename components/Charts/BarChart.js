import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";

if (typeof Highcharts === "object") {
  HighchartsMore(Highcharts);
}

const BarChart = () => {
  const options = {
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
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;
