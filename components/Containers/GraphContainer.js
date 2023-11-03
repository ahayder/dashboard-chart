import React, { useState, useEffect, useRef } from "react";
import BarChart from "../Charts/BarChart";
import BoxWhiskerPlot from "../Charts/BoxWhiskerPlot";
import ScatterChart from "../Charts/ScatterChart";
import AreaRangeChart from "../Charts/AreaRangeChart";
import SettingsMenu from "../SettingsMenu";
import { useSelector } from "react-redux";

const GraphContainer = ({ chartKey }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const containerRef = useRef(null);
  const chartType = useSelector(
    (state) => state.dashboard[chartKey].chart.type
  );

  // I am not using the react-grid-layout onResize or onLayoutChange callbacks here
  // Because that would require more complicated logic to get the correct dimensions in pixels
  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  const renderChartComponent = (chartType) => {
    const commonProps = { ...dimensions };

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
