import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";
import { useSelector } from "react-redux";

if (typeof Highcharts === "object") {
  HighchartsMore(Highcharts);
}

const AreaRangeChart = () => {
  const areaRangeChartOptions = useSelector(
    (state) => state.dashboard.areaRangeChart
  );

  return (
    <HighchartsReact highcharts={Highcharts} options={areaRangeChartOptions} />
  );
};

export default AreaRangeChart;
