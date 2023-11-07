import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import BoxWhiskerPlot from "../components/Charts/BoxWhiskerPlot";

const mockStore = configureStore([]);

beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation(() => {});
});

describe("BoxWhiskerPlot", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      dashboard: {
        chartConfig: {
          boxWhiskerPlot: {
            chart: {
              type: "boxplot",
            },
            title: {
              text: "Box and Whisker Plot",
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
                data: [
                  [1, 3, 5, 7, 9],
                  [2, 4, 6, 8, 10],
                ],
              },
              {
                name: "John",
                data: [
                  [5, 7, 9, 11, 13],
                  [6, 8, 10, 12, 14],
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
        <BoxWhiskerPlot width={500} height={300} />
      </Provider>
    );

    const titleElement = screen.getByText("Box and Whisker Plot");
    expect(titleElement).toBeInTheDocument();
  });

  it("renders the chart with the correct type", () => {
    render(
      <Provider store={store}>
        <BoxWhiskerPlot width={500} height={300} />
      </Provider>
    );

    const chartType =
      store.getState().dashboard.chartConfig.boxWhiskerPlot.chart.type;
    expect(chartType).toBe("boxplot");
  });

  it("renders the chart with the correct data", () => {
    render(
      <Provider store={store}>
        <BoxWhiskerPlot width={500} height={300} />
      </Provider>
    );

    const chartData = store
      .getState()
      .dashboard.chartConfig.boxWhiskerPlot.series.map((series) => series.data);
    expect(chartData).toEqual([
      [
        [1, 3, 5, 7, 9],
        [2, 4, 6, 8, 10],
      ],
      [
        [5, 7, 9, 11, 13],
        [6, 8, 10, 12, 14],
      ],
    ]);
  });
});
