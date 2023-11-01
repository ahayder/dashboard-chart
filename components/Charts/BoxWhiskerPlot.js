import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";

const BoxWhiskerPlot = () => {
  const boxWhiskerPlotOptions = useSelector(
    (state) => state.dashboard.boxWhiskerPlot
  );

  return (
    <HighchartsReact highcharts={Highcharts} options={boxWhiskerPlotOptions} />
  );
};

export default BoxWhiskerPlot;
