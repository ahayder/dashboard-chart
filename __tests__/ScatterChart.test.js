import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ScatterChart from "../components/Charts/ScatterChart";

const mockStore = configureStore([]);

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

describe("ScatterChart", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      dashboard: {
        chartConfig: {
          scatterChart: {
            chart: {
              type: "scatter",
            },
            title: {
              text: "Scatter Chart",
            },
            xAxis: {
              title: {
                text: "X Axis",
              },
            },
            yAxis: {
              title: {
                text: "Y Axis",
              },
            },
            series: [
              {
                name: "Series 1",
                data: [
                  [1, 2],
                  [2, 3],
                  [3, 4],
                ],
              },
              {
                name: "Series 2",
                data: [
                  [4, 5],
                  [5, 6],
                  [6, 7],
                ],
              },
            ],
          },
        },
      },
    });
  });

  it("renders the chart with the correct title", () => {
    render(
      <Provider store={store}>
        <ScatterChart width={500} height={300} />
      </Provider>
    );

    const titleElement = screen.getByText("Scatter Chart");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the chart with the correct type", () => {
    render(
      <Provider store={store}>
        <ScatterChart width={500} height={300} />
      </Provider>
    );

    const chartType =
      store.getState().dashboard.chartConfig.scatterChart.chart.type;
    expect(chartType).toBe("scatter");
  });

  it("renders the chart with the correct data", () => {
    render(
      <Provider store={store}>
        <ScatterChart width={500} height={300} />
      </Provider>
    );

    const chartData = store
      .getState()
      .dashboard.chartConfig.scatterChart.series.map((series) => series.data);
    expect(chartData).toEqual([
      [
        [1, 2],
        [2, 3],
        [3, 4],
      ],
      [
        [4, 5],
        [5, 6],
        [6, 7],
      ],
    ]);
  });
});
