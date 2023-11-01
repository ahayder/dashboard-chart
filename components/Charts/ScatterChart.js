import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";

const ScatterChart = () => {
  const scatterChartOptions = useSelector(
    (state) => state.dashboard.scatterChart
  );

  return (
    <HighchartsReact highcharts={Highcharts} options={scatterChartOptions} />
  );
};

export default ScatterChart;
