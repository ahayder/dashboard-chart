import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSelector } from "react-redux";
import { useHighchartsResize } from "../../hooks/useHighchartsResize";

const BarChart = ({ width, height }) => {
  const chartOptionsFromRedux = useSelector(
    (state) => state.dashboard.chartConfig.barChart
  );

  const { chartComponentRef, Highcharts, chartOptions } = useHighchartsResize(
    chartOptionsFromRedux,
    width,
    height
  );

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={chartOptions}
      ref={chartComponentRef}
    />
  );
};

export default BarChart;
