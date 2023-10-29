import React from "react";
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
  const chartType = useSelector((state) => state.dashboard.chartType);
  const chartTitle = useSelector((state) => state.dashboard.chartTitle);

  const handleChangeChartType = (key, type) => {
    dispatch(changeChartType({ key, type }));
  };

  const handleUpdateTitle = (key, title) => {
    dispatch(updateTitle({ key, title }));
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
        <BarChart />
        <SettingsMenu
          changeChartType={handleChangeChartType}
          updateTitle={handleUpdateTitle}
        />
      </div>
      <div key="boxWhiskerPlot">
        <BoxWhiskerPlot />
        <SettingsMenu
          changeChartType={handleChangeChartType}
          updateTitle={handleUpdateTitle}
        />
      </div>
      <div key="scatterChart">
        <ScatterChart />
        <SettingsMenu
          changeChartType={handleChangeChartType}
          updateTitle={handleUpdateTitle}
        />
      </div>
      <div key="areaRangeChart">
        <AreaRangeChart />
        <SettingsMenu
          changeChartType={handleChangeChartType}
          updateTitle={handleUpdateTitle}
        />
      </div>
    </ResponsiveGridLayout>
  );
};

export default Dashboard;
