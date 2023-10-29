import React from "react";

const SettingsMenu = ({ changeChartType, updateTitle }) => {
  return (
    <div className="settings-menu">
      <select onChange={(e) => changeChartType(e.target.value)}>
        <option value="bar">Bar Chart</option>
        <option value="box">Box and Whisker Plot</option>
        <option value="scatter">Scatter Chart</option>
        <option value="area">Area Range Chart</option>
      </select>
      <input
        type="text"
        placeholder="Chart Title"
        onChange={(e) => updateTitle(e.target.value)}
      />
    </div>
  );
};

export default SettingsMenu;
