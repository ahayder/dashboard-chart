import { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";

if (typeof Highcharts === "object") {
  HighchartsMore(Highcharts);
}

export function useHighchartsResize(chartOptions, width, height) {
  const chartComponentRef = useRef(null);

  useEffect(() => {
    if (chartComponentRef.current) {
      const chart = chartComponentRef.current.chart;
      chart.setSize(width, height, false);
    }
  }, [width, height]);

  return {
    chartComponentRef,
    Highcharts,
    chartOptions,
  };
}
