import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "./home";
import store from "../../redux/store/";
import { Provider } from "react-redux";

const MockHome = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
};

// dummy function to type into our input.
const modifyInput = (message) => {
  const inputElement = screen.getByTestId("messagefield");
  const updateMessageButton = screen.getByText("update message");
  fireEvent.change(inputElement, {
    target: { value: message },
  });
  fireEvent.click(updateMessageButton);
};

describe("Home", () => {
  it("should render text on home page.", () => {
    /*
     * although this has a provider giving us access to the store we're not testing any slices so this is just a unit test
     * verifying if we can see an HTML element on the screen.
     */
    render(<MockHome />);
    expect(
      screen.getByText(/Welcome to the Home component!/i)
    ).toBeInTheDocument();
  });
  it("should render a message after entering data into the input and then updating the message.", () => {
    render(<MockHome />);
    const message = "hello";
    modifyInput(message);
    expect(screen.getByText(message)).toBeInTheDocument();
  });
  it("should render a message after entering data into the input, then updating the message, and clearing it.", () => {
    // integration test with our message slice.
    render(<MockHome />);
    const message = "hello";
    modifyInput(message);
    // message is still on screen (verified in the above test).
    const clearMessageButton = screen.getByText("clear message");
    // clear the message.
    fireEvent.click(clearMessageButton);
    expect(screen.queryByText(message)).toBeNull();
  });
});
