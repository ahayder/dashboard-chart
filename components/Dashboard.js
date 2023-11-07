import React, { useCallback } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import GraphContainer from "./Containers/GraphContainer";
import { useDispatch, useSelector } from "react-redux";
import { setBreakPoint, updateLayout } from "../redux/dashboardSlice";
import { breakpoints, columns } from "../utils/grid-layout-config";
import { chartTypeToKey } from "../utils/constants";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
  const dispatch = useDispatch();
  const layout = useSelector((state) => state.dashboard.layout);
  const breakPoint = useSelector((state) => state.dashboard.breakPoint);

  const handleBreakpointChange = useCallback(
    (newBreakpoint) => {
      if (breakPoint !== newBreakpoint) {
        dispatch(setBreakPoint(newBreakpoint));
      }
    },
    [breakPoint, dispatch]
  );

  const handleLayoutChange = useCallback(
    (newLayout, layouts) => {
      dispatch(
        updateLayout({ breakpoint: breakPoint, newLayout: layouts[breakPoint] })
      );
    },
    [breakPoint, dispatch]
  );

  return (
    <div className="dashboard">
      <ResponsiveGridLayout
        className="layout"
        layouts={layout}
        onBreakpointChange={handleBreakpointChange}
        onLayoutChange={handleLayoutChange}
        breakpoints={breakpoints}
        cols={columns}
      >
        {Object.entries(chartTypeToKey).map(([type, key]) => (
          <div key={key}>
            <GraphContainer chartKey={key} />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default Dashboard;
