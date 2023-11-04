import React, { useState, useEffect, useRef } from "react";
import BarChart from "../Charts/BarChart";
import BoxWhiskerPlot from "../Charts/BoxWhiskerPlot";
import ScatterChart from "../Charts/ScatterChart";
import AreaRangeChart from "../Charts/AreaRangeChart";
import SettingsMenu from "../SettingsMenu";
import { useSelector } from "react-redux";
import useContainerDimensions from "../../hooks/useContainerDimensions";

const GraphContainer = ({ chartKey }) => {
  const containerRef = useRef(null);
  const chartType = useSelector(
    (state) => state.dashboard[chartKey].chart.type
  );
  // I am not using the react-grid-layout onResize or onLayoutChange callbacks here
  // Because that would require more complicated logic to get the correct dimensions in pixels
  // since react-grid-layout does not provide the dimensions in pixels
  const { width, height } = useContainerDimensions(containerRef);

  const renderChartComponent = (chartType) => {
    const commonProps = { width, height };

    switch (chartType) {
      case "bar":
        return <BarChart {...commonProps} />;
      case "boxplot":
        return <BoxWhiskerPlot {...commonProps} />;
      case "scatter":
        return <ScatterChart {...commonProps} />;
      case "arearange":
        return <AreaRangeChart {...commonProps} />;
      default:
        return null;
    }
  };

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <SettingsMenu chartKey={chartKey} />
      {renderChartComponent(chartType)}
    </div>
  );
};

export default GraphContainer;
