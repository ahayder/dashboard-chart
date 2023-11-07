import { useRef } from "react";
import BarChart from "../Charts/BarChart";
import BoxWhiskerPlot from "../Charts/BoxWhiskerPlot";
import ScatterChart from "../Charts/ScatterChart";
import AreaRangeChart from "../Charts/AreaRangeChart";
import SettingsMenu from "../SettingsMenu";
import { useSelector, useDispatch } from "react-redux";
import { setOpenSettingsKey } from "../../redux/dashboardSlice";
import useContainerDimensions from "../../hooks/useContainerDimensions";

const GraphContainer = ({ chartKey }) => {
  const dispatch = useDispatch();
  const openMenuKey = useSelector((state) => state.dashboard.openSettingsKey);
  const containerRef = useRef(null);
  const { width, height } = useContainerDimensions(containerRef);
  const chartType = useSelector(
    (state) => state.dashboard.chartConfig[chartKey].chart.type
  );

  const handleMenuToggle = () => {
    dispatch(setOpenSettingsKey(openMenuKey === chartKey ? null : chartKey));
  };

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
        return <div>Unsupported chart type</div>;
    }
  };

  return (
    <div ref={containerRef} className="graph-container">
      <SettingsMenu
        chartKey={chartKey}
        isOpen={openMenuKey === chartKey}
        onToggle={handleMenuToggle}
      />
      {renderChartComponent(chartType)}
    </div>
  );
};

export default GraphContainer;
