import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./layout/home";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;
