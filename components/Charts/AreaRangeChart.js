import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HighchartsMore from "highcharts/highcharts-more";
import { useSelector } from "react-redux";
import { useHighchartsResize } from "../../hooks/useHighchartsResize";

if (typeof Highcharts === "object") {
  HighchartsMore(Highcharts);
}

const AreaRangeChart = ({ width, height }) => {
  const chartOptionsFromRedux = useSelector(
    (state) => state.dashboard.areaRangeChart
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

export default AreaRangeChart;
