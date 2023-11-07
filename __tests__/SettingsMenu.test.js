import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import SettingsMenu from "../components/SettingsMenu";
import { store } from "../redux/store";

// Due to time constraints I was unable to complete this test.

describe("SettingsMenu Component", () => {
  it("should display the chart type dropdown when settings icon is clicked", () => {
    const { getByTestId, queryByTestId } = render(
      <Provider store={store}>
        <SettingsMenu chartKey="barChart" />
      </Provider>
    );

    expect(queryByTestId("chart-type-dropdown")).not.toBeInTheDocument();

    fireEvent.click(getByTestId("settings-icon"));

    expect(getByTestId("chart-type-dropdown")).toBeInTheDocument();
  });
});
