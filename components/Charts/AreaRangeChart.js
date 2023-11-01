import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";

const AreaRangeChart = () => {
  const areaRangeChartOptions = useSelector(
    (state) => state.dashboard.areaRangeChart
  );

  return (
    <HighchartsReact highcharts={Highcharts} options={areaRangeChartOptions} />
  );
};

export default AreaRangeChart;
