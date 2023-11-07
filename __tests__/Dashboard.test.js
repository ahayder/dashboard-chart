import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Dashboard from "../components/Dashboard";

jest.mock("../components/GraphContainer", () => {
  const MockGraphContainer = ({ chartKey }) => (
    <div data-testid={`graph-container-${chartKey}`}>Mock GraphContainer</div>
  );
  return MockGraphContainer;
});

const mockStore = configureStore([]);

describe("Dashboard", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      dashboard: {
        layout: {
          lg: [
            { i: "0", x: 0, y: 0, w: 6, h: 6 },
            { i: "1", x: 6, y: 0, w: 6, h: 6 },
          ],
        },
        breakPoint: "lg",
        chartConfig: {
          barChart: {
            chart: {
              type: "bar",
            },
          },
          boxWhiskerPlot: {
            chart: {
              type: "boxplot",
            },
          },
          scatterChart: {
            chart: {
              type: "scatter",
            },
          },
          areaRangeChart: {
            chart: {
              type: "arearange",
            },
          },
        },
      },
    });
  });

  it("renders the dashboard with the correct layout", () => {
    render(
      <Provider store={store}>
        <Dashboard />
      </Provider>
    );

    const barChartContainer = screen.getByTestId("graph-container-barChart");
    const boxWhiskerPlotContainer = screen.getByTestId(
      "graph-container-boxWhiskerPlot"
    );
    const scatterChartContainer = screen.getByTestId(
      "graph-container-scatterChart"
    );
    const areaRangeChartContainer = screen.getByTestId(
      "graph-container-areaRangeChart"
    );

    expect(barChartContainer).toBeInTheDocument();
    expect(boxWhiskerPlotContainer).toBeInTheDocument();
    expect(scatterChartContainer).toBeInTheDocument();
    expect(areaRangeChartContainer).toBeInTheDocument();
  });
});
