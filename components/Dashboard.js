import React, { useCallback, useMemo } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import GraphContainer from "./Containers/GraphContainer";
import { useDispatch, useSelector } from "react-redux";
import { setBreakPoint, updateLayout } from "../redux/dashboardSlice";
import { breakpoints, columns } from "../utils/grid-layout-config";

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

  const layoutForCurrentBreakpoint = useMemo(
    () => layout[breakPoint],
    [layout, breakPoint]
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
        {layoutForCurrentBreakpoint.map((layoutItem) => (
          <div key={layoutItem.i} data-grid={layoutItem}>
            <GraphContainer chartKey={layoutItem.i} />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default Dashboard;
