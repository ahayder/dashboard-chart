import { useState, useCallback } from "react";
import { Button, Dropdown, Input } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeChartType,
  setOpenSettingsKey,
  updateTitle,
} from "../redux/dashboardSlice";
import { chartKeyToType, dropdownOptions } from "../utils/constants";

const MAX_TITLE_LENGTH = 100;
const VALID_TITLE_REGEX = /^[a-zA-Z0-9 _-]*$/;

const SettingsMenu = ({ chartKey }) => {
  const dispatch = useDispatch();
  const openSettingsKey = useSelector(
    (state) => state.dashboard.openSettingsKey
  );
  const chartConfig = useSelector(
    (state) => state.dashboard.chartConfig[chartKey]
  );
  const chartType = chartConfig.chart.type;
  const chartTitle = chartConfig.title.text;

  const [title, setTitle] = useState(chartTitle);
  const [titleError, setTitleError] = useState("");

  const handleChartTypeChange = useCallback(
    (event, data) => {
      const isDefaultType = data.value === chartKeyToType[chartKey];
      dispatch(changeChartType({ key: chartKey, type: data.value }));
    },
    [chartKey, dispatch]
  );
  // Not using any validation library for simplicity
  const handleTitleChange = useCallback((event, data) => {
    if (data.value.length > MAX_TITLE_LENGTH) {
      setTitleError("Title is too long.");
    } else if (!VALID_TITLE_REGEX.test(data.value)) {
      setTitleError("Invalid characters used.");
    } else {
      setTitle(data.value);
      setTitleError("");
    }
  }, []);

  const handleSaveTitle = useCallback(() => {
    const trimmedTitle = title.trim();
    if (trimmedTitle.length === 0) {
      setTitleError("Title cannot be empty.");
    } else if (!titleError) {
      dispatch(updateTitle({ key: chartKey, title: trimmedTitle }));
    }
  }, [chartKey, dispatch, title, titleError]);

  const handleToggleSettings = useCallback(() => {
    dispatch(setOpenSettingsKey(chartKey));
  }, [chartKey, dispatch]);

  const isDefaultType = chartType === chartKeyToType[chartKey];
  const isOpen = openSettingsKey === chartKey;

  return (
    <div className={`settings-menu ${!isOpen ? "collapsed" : ""}`}>
      <div className="settings-header" onClick={handleToggleSettings}>
        <i
          className={`icon ${isOpen ? "arrow up" : "cog"}`}
          style={{ fontSize: "larger" }}
          data-testid="settings-icon"
        />
        {isOpen && <strong>Settings</strong>}
      </div>
      {isOpen && (
        <div className="settings-body">
          <label htmlFor="chart-type-dropdown">Change Chart Type</label>
          <Dropdown
            id="chart-type-dropdown"
            placeholder="Select Chart Type"
            selection
            options={dropdownOptions}
            value={chartType}
            onChange={handleChartTypeChange}
            className="chart-type-dropdown"
            data-testid="chart-type-dropdown"
          />
          {isDefaultType && (
            <div className="chart-title-container">
              <label htmlFor="chart-title-input">Change Chart Title</label>
              <Input
                id="chart-title-input"
                placeholder="Enter Chart Title"
                value={title}
                onChange={handleTitleChange}
                error={titleError ? true : false}
                data-testid="chart-title-input"
              />
              <Button
                onClick={handleSaveTitle}
                disabled={title === chartTitle || titleError}
                className="save-title-button"
                color="instagram"
                data-testid="save-title-button"
              >
                Save
              </Button>
              {titleError && (
                <div data-testid="error-message" className="error-message">
                  {titleError}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SettingsMenu;
