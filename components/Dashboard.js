import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import grid_layout_config from "../utils/grid-layout-config";
import { chartTypes } from "../utils/constants";
import GraphContainer from "./Containers/GraphContainer";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Dashboard = () => {
  return (
    <div className="dashboard">
      <ResponsiveGridLayout
        className="layout"
        layouts={grid_layout_config}
        breakpoints={{ lg: 1200, md: 880, sm: 720, xs: 480 }}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4 }}
        isDraggable
        isResizable
      >
        {chartTypes.map((chart) => (
          <div key={Object.keys(chart)[0]} data-grid={chart.layout}>
            <GraphContainer chartKey={Object.values(chart)[0]} />
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default Dashboard;
