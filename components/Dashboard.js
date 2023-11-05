import { useCallback } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import GraphContainer from "./Containers/GraphContainer";
import { useDispatch, useSelector } from "react-redux";
import { setBreakPoint, updateLayout } from "../redux/dashboardSlice";

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
    [dispatch, breakPoint]
  );

  const handleLayoutChange = useCallback(
    (newLayout, layouts) => {
      dispatch(
        updateLayout({
          breakpoint: breakPoint,
          newLayout: layouts[breakPoint],
        })
      );
    },
    [dispatch, breakPoint]
  );

  return (
    <div className="dashboard">
      <ResponsiveGridLayout
        className="layout"
        layouts={layout}
        onLayoutChange={handleLayoutChange}
        breakpoints={{ lg: 1200, md: 880, sm: 720, xs: 480 }}
        onBreakpointChange={handleBreakpointChange}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4 }}
        isDraggable
        isResizable
      >
        {layout[breakPoint].map((layoutItem) => (
          <div key={layoutItem.i} data-grid={layoutItem}>
            <GraphContainer chartKey={layoutItem.i} />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default Dashboard;
