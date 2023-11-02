import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";
import { useSelector } from "react-redux";

if (typeof Highcharts === "object") {
  HighchartsMore(Highcharts);
}

const BoxWhiskerPlot = () => {
  const boxWhiskerPlotOptions = useSelector(
    (state) => state.dashboard.boxWhiskerPlot
  );

  return (
    <HighchartsReact highcharts={Highcharts} options={boxWhiskerPlotOptions} />
  );
};

export default BoxWhiskerPlot;
