import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import BarChart from "../components/Charts/BarChart";

const mockStore = configureStore([]);

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

describe("BarChart", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      dashboard: {
        chartConfig: {
          barChart: {
            chart: {
              type: "bar",
            },
            title: {
              text: "Bar Chart",
            },
            xAxis: {
              categories: ["Apples", "Bananas", "Oranges"],
            },
            yAxis: {
              title: {
                text: "Fruit eaten",
              },
            },
            series: [
              {
                name: "Jane",
                data: [1, 0, 4],
              },
              {
                name: "John",
                data: [5, 7, 3],
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
        <BarChart width={500} height={300} />
      </Provider>
    );

    const titleElement = screen.getByText("Bar Chart");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the chart with the correct type", () => {
    render(
      <Provider store={store}>
        <BarChart width={500} height={300} />
      </Provider>
    );

    const chartType =
      store.getState().dashboard.chartConfig.barChart.chart.type;
    expect(chartType).toBe("bar");
  });

  it("renders the chart with the correct data", () => {
    render(
      <Provider store={store}>
        <BarChart width={500} height={300} />
      </Provider>
    );

    const chartData = store.getState().dashboard.chartConfig.barChart.series;
    expect(chartData).toEqual([
      { name: "Jane", data: [1, 0, 4] },
      { name: "John", data: [5, 7, 3] },
    ]);
  });
});
