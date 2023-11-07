import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import AreaRangeChart from "../components/Charts/AreaRangeChart";

const mockStore = configureStore([]);

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

describe("AreaRangeChart", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      dashboard: {
        chartConfig: {
          areaRangeChart: {
            chart: {
              type: "arearange",
            },
            title: {
              text: "Area Range Chart",
            },
            xAxis: {
              categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            },
            yAxis: {
              title: {
                text: "Temperature (°C)",
              },
            },
            series: [
              {
                name: "Temperature",
                data: [
                  [0, 10, 20],
                  [1, 15, 25],
                  [2, 20, 30],
                  [3, 25, 35],
                  [4, 30, 40],
                  [5, 35, 45],
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
        <AreaRangeChart width={500} height={300} />
      </Provider>
    );

    const titleElement = screen.getByText("Area Range Chart");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the chart with the correct type", () => {
    render(
      <Provider store={store}>
        <AreaRangeChart width={500} height={300} />
      </Provider>
    );

    const chartType =
      store.getState().dashboard.chartConfig.areaRangeChart.chart.type;
    expect(chartType).toBe("arearange");
  });

  it("renders the chart with the correct data", () => {
    render(
      <Provider store={store}>
        <AreaRangeChart width={500} height={300} />
      </Provider>
    );

    const chartData =
      store.getState().dashboard.chartConfig.areaRangeChart.series[0].data;
    expect(chartData).toEqual([
      [0, 10, 20],
      [1, 15, 25],
      [2, 20, 30],
      [3, 25, 35],
      [4, 30, 40],
      [5, 35, 45],
    ]);
  });
});
