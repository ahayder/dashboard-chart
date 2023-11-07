import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import GraphContainer from "../components/GraphContainer";

const mockStore = configureStore([]);
const store = mockStore({
  dashboard: {
    openSettingsKey: null,
    chartConfig: {
      barChart: {
        chart: { type: "bar" },
        title: { text: "Bar Chart Title" },
      },
      boxWhiskerPlot: {
        chart: { type: "boxplot" },
        title: { text: "Box Whisker Plot Title" },
      },
      scatterChart: {
        chart: { type: "scatter" },
        title: { text: "Scatter Chart Title" },
      },
      areaRangeChart: {
        chart: { type: "arearange" },
        title: { text: "Area Range Chart Title" },
      },
    },
  },
});

// Define the dummy components with proper display names to avoid ESLint errors
const DummyBarChart = () => <div>BarChart Placeholder</div>;
DummyBarChart.displayName = "DummyBarChart";

const DummyBoxWhiskerPlot = () => <div>BoxWhiskerPlot Placeholder</div>;
DummyBoxWhiskerPlot.displayName = "DummyBoxWhiskerPlot";

const DummyScatterChart = () => <div>ScatterChart Placeholder</div>;
DummyScatterChart.displayName = "DummyScatterChart";

const DummyAreaRangeChart = () => <div>AreaRangeChart Placeholder</div>;
DummyAreaRangeChart.displayName = "DummyAreaRangeChart";

jest.mock("../hooks/useContainerDimensions", () => () => ({
  width: 100,
  height: 100,
}));

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

describe("GraphContainer", () => {
  it("renders BarChart when chartKey is barChart", () => {
    render(
      <Provider store={store}>
        <GraphContainer
          chartKey="barChart"
          ChartComponents={{ barChart: DummyBarChart }}
        />
      </Provider>
    );
    expect(screen.getByText("Bar Chart Title")).toBeInTheDocument();
  });

  it("renders BoxWhiskerPlot when chartKey is boxWhiskerPlot", () => {
    render(
      <Provider store={store}>
        <GraphContainer
          chartKey="boxWhiskerPlot"
          ChartComponents={{ boxWhiskerPlot: DummyBoxWhiskerPlot }}
        />
      </Provider>
    );
    expect(screen.getByText("Box Whisker Plot Title")).toBeInTheDocument();
  });

  it("renders ScatterChart when chartKey is scatterChart", () => {
    render(
      <Provider store={store}>
        <GraphContainer
          chartKey="scatterChart"
          ChartComponents={{ scatterChart: DummyScatterChart }}
        />
      </Provider>
    );
    expect(screen.getByText("Scatter Chart Title")).toBeInTheDocument();
  });

  it("renders AreaRangeChart when chartKey is areaRangeChart", () => {
    render(
      <Provider store={store}>
        <GraphContainer
          chartKey="areaRangeChart"
          ChartComponents={{ areaRangeChart: DummyAreaRangeChart }}
        />
      </Provider>
    );
    expect(screen.getByText("Area Range Chart Title")).toBeInTheDocument();
  });
});
