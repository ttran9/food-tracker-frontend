import React, { Fragment, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMessage, setMessage } from "../../redux/slice/message";

/**
 * Component to display the welcome/home page.
 * @returns The page for the home page.
 */
const Home = () => {
  const messageSlice = useSelector((state) => state.message);
  const messageFieldRef = useRef();
  const dispatch = useDispatch();

  // dummy function. won't really be used in a real app.
  const updateMessageValue = (message) => {
    dispatch(setMessage(message));
  };

  // dummy function. won't really be used in a real app.
  const clearMessageValue = () => {
    dispatch(clearMessage());
    messageFieldRef.current.value = "";
  };

  return (
    <Fragment>
      {messageSlice && (
        <span data-cy="messagespan">{messageSlice.message}</span>
      )}
      <h1>Welcome to the Home component!!</h1>
      <input
        ref={messageFieldRef}
        type="text"
        name="messagefield"
        data-testid="messagefield"
        data-cy="messagefield"
      ></input>
      <button
        onClick={() => {
          updateMessageValue(messageFieldRef.current.value);
        }}
        data-cy="updatemessagebutton"
      >
        update message
      </button>
      <button
        onClick={() => {
          clearMessageValue();
        }}
        data-cy="clearmessagebutton"
      >
        clear message
      </button>
    </Fragment>
  );
};

export default Home;
