import { useState } from "react";
import { Dropdown, Input } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { changeChartType, updateTitle } from "../redux/dashboardSlice";

const SettingsMenu = ({ chartKey }) => {
  const dispatch = useDispatch();
  const chartType = useSelector(
    (state) => state.dashboard[chartKey].chart.type
  );
  const chartTitle = useSelector(
    (state) => state.dashboard[chartKey].title.text
  );

  const [isCollapsed, setIsCollapsed] = useState(true);
  const [title, setTitle] = useState(chartTitle);

  const handleChartTypeChange = (event, data) => {
    dispatch(changeChartType({ key: chartKey, type: data.value }));
  };

  const handleTitleChange = (event, data) => {
    setTitle(data.value);
    dispatch(updateTitle({ key: chartKey, title: data.value }));
  };

  const handleCollapseClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`settings-menu ${isCollapsed ? "collapsed" : ""}`}>
      <div className="settings-header" onClick={handleCollapseClick}>
        <i className={`icon ${isCollapsed ? "cog" : "arrow down"}`} />
        {!isCollapsed && (
          <span style={{ display: "inline-block", marginBottom: "5px" }}>
            Settings
          </span>
        )}
      </div>
      {!isCollapsed && (
        <div
          className="settings-body full-width"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Dropdown
            className="chart-type-dropdown full-width"
            placeholder="Select Chart Type"
            selection
            options={[
              { key: "bar", text: "Bar Chart", value: "bar" },
              {
                key: "boxWhisker",
                text: "Box and Whisker Plot",
                value: "boxplot",
              },
              { key: "scatter", text: "Scatter Chart", value: "scatter" },
              {
                key: "areaRange",
                text: "Area Range Chart",
                value: "arearange",
              },
            ]}
            value={chartType}
            onChange={handleChartTypeChange}
          />
          <Input
            className="chart-title-input full-width"
            placeholder="Chart Title"
            value={title}
            onChange={handleTitleChange}
          />
        </div>
      )}
      <div style={{ height: "2px" }} />
    </div>
  );
};

export default SettingsMenu;
