import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BoxWhiskerPlot = () => {
  const options = {
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
  };

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BoxWhiskerPlot;
