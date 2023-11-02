import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";

const BarChart = () => {
  const barChartOptions = useSelector((state) => state.dashboard.barChart);

  return <HighchartsReact highcharts={Highcharts} options={barChartOptions} />;
};

export default BarChart;
