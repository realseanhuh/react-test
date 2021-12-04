import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("The counter should start at 0.", () => {
  render(<App />);
  // screen object를 이용하여 원하는 엘리먼트에 접근(id를 사용하여)
  const counterEl = screen.getByTestId("counter");
  // 해당 엘리먼트의 텍스트가 0인지 테스트
  expect(counterEl).toHaveTextContent(0);
});

test("The minus button should have the correct text.", () => {
  render(<App />);
  const minusBtnEl = screen.getByTestId("minus-btn");
  expect(minusBtnEl).toHaveTextContent("-");
});

test("The plus button should have the correct text.", () => {
  render(<App />);
  const plusBtnEl = screen.getByTestId("plus-btn");
  expect(plusBtnEl).toHaveTextContent("+");
});

test("Pressing the minus button should reduce the counter by 1.", () => {
  render(<App />);
  const minusBtnEl = screen.getByTestId("minus-btn");
  fireEvent.click(minusBtnEl);
  const counterEl = screen.getByTestId("counter");
  expect(counterEl).toHaveTextContent(-1);
});

test("Pressing the plus button should increase the counter by 1.", () => {
  render(<App />);
  const plusBtnEl = screen.getByTestId("plus-btn");
  fireEvent.click(plusBtnEl);
  const counterEl = screen.getByTestId("counter");
  expect(counterEl).toHaveTextContent(1);
});

test("The on/off button should be a blue button.", () => {
  render(<App />);
  const onoffBtn = screen.getByTestId("on-off-btn");
  expect(onoffBtn).toHaveStyle({ backgroundColor: "blue" });
});

test.only("When clicking the on/off button, the operation of the plus button and the minus button must be prevented.", () => {
  render(<App />);
  const onoffBtn = screen.getByTestId("on-off-btn");
  fireEvent.click(onoffBtn);
  const plusBtnEl = screen.getByTestId("plus-btn");
  const minusBtnEl = screen.getByTestId("minus-btn");
  expect(plusBtnEl).toBeDisabled();
  expect(minusBtnEl).toBeDisabled();
});
