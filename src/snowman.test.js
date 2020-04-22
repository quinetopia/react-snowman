import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import Snowman from "./Snowman";

it("renders without crashing", function() {
  render(<Snowman />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<Snowman />);
  expect(asFragment()).toMatchSnapshot();
});

it("shows the correct image at first incorrect character guess", function() {
  const { queryByTestId, getByText} = render(<Snowman />);

    fireEvent.click(getByText("b"));
  // expect the first image to show, but not the second
  expect(queryByTestId("snowmanImage")).toContainHTML('src="1.png"');

});

it("stops the game after 6 wrong guesses", function() {
  const { queryByText, getByText } = render(<Snowman />);

    fireEvent.click(getByText("b"));
    fireEvent.click(getByText("c"));
    fireEvent.click(getByText("d"));
    fireEvent.click(getByText("f"));
    fireEvent.click(getByText("g"));
    fireEvent.click(getByText("i"));
  // expect the first image to show, but not the second
  expect(queryByText("a")).toBe(null);

});


