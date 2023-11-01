import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import BarChart from "./Charts/BarChart";
import BoxWhiskerPlot from "./Charts/BoxWhiskerPlot";
import ScatterChart from "./Charts/ScatterChart";
import AreaRangeChart from "./Charts/AreaRangeChart";
import SettingsMenu from "./SettingsMenu";
import { useSelector, useDispatch } from "react-redux";
import { changeChartType, updateTitle } from "../redux/dashboardSlice";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
  const layout = [
    { i: "barChart", x: 0, y: 0, w: 4, h: 4 },
    { i: "boxWhiskerPlot", x: 4, y: 0, w: 4, h: 4 },
    { i: "scatterChart", x: 8, y: 0, w: 4, h: 4 },
    { i: "areaRangeChart", x: 12, y: 0, w: 4, h: 4 },
  ];

  const dispatch = useDispatch();
  const barChartType = useSelector(
    (state) => state.dashboard.barChart.chart.type
  );
  const barChartTitle = useSelector(
    (state) => state.dashboard.barChart.title.text
  );
  const boxWhiskerPlotType = useSelector(
    (state) => state.dashboard.boxWhiskerPlot.chart.type
  );
  const boxWhiskerPlotTitle = useSelector(
    (state) => state.dashboard.boxWhiskerPlot.title.text
  );
  const scatterChartType = useSelector(
    (state) => state.dashboard.scatterChart.chart.type
  );
  const scatterChartTitle = useSelector(
    (state) => state.dashboard.scatterChart.title.text
  );
  const areaRangeChartType = useSelector(
    (state) => state.dashboard.areaRangeChart.chart.type
  );
  const areaRangeChartTitle = useSelector(
    (state) => state.dashboard.areaRangeChart.title.text
  );

  const renderChartComponent = (chartType, chartTitle) => {
    switch (chartType) {
      case "bar":
        return <BarChart title={chartTitle} />;
      case "boxWhisker":
        return <BoxWhiskerPlot title={chartTitle} />;
      case "scatter":
        return <ScatterChart title={chartTitle} />;
      case "areaRange":
        return <AreaRangeChart title={chartTitle} />;
      default:
        return null;
    }
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200 }}
      cols={{ lg: 16 }}
      rowHeight={30}
      isDraggable={true}
      isResizable={true}
      bounds={"parent"}
    >
      <div key="barChart">
        <SettingsMenu chartKey="barChart" />
        {renderChartComponent(barChartType, barChartTitle)}
      </div>
      <div key="boxWhiskerPlot">
        <SettingsMenu chartKey="boxWhiskerPlot" />
        {renderChartComponent(boxWhiskerPlotType, boxWhiskerPlotTitle)}
      </div>
      <div key="scatterChart">
        <SettingsMenu chartKey="scatterChart" />
        {renderChartComponent(scatterChartType, scatterChartTitle)}
      </div>
      <div key="areaRangeChart">
        <SettingsMenu chartKey="areaRangeChart" />
        {renderChartComponent(areaRangeChartType, areaRangeChartTitle)}
      </div>
    </ResponsiveGridLayout>
  );
};

export default Dashboard;
